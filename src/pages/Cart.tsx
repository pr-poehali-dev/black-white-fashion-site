import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useCart } from "@/components/CartContext";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);

    // Имитация обработки платежа
    setTimeout(() => {
      toast.success("Заказ успешно оформлен! Спасибо за покупку!");
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-2xl mx-auto px-4 py-16 text-center">
          <Icon
            name="ShoppingBag"
            size={64}
            className="mx-auto mb-4 text-gray-400"
          />
          <h2 className="text-2xl font-bold text-black mb-4">
            Ваша корзина пуста
          </h2>
          <p className="text-gray-600 mb-8">Добавьте товары из каталога</p>
          <Link to="/">
            <Button className="bg-black hover:bg-gray-800">
              Перейти к покупкам
            </Button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-black mb-8 font-montserrat">
          Корзина
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${item.size}`}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-black">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        Размер: {item.size}
                      </p>
                      <p className="font-bold text-black mt-1">
                        {item.price.toLocaleString()} ₽
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity - 1)
                        }
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id, item.size)}
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Оформление заказа</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Товары:</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка:</span>
                  <span>Бесплатно</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Итого:</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>

                <form onSubmit={handleCheckout} className="space-y-4 mt-6">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" required />
                  </div>

                  <div>
                    <Label htmlFor="address">Адрес доставки</Label>
                    <Input id="address" required />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800"
                    disabled={isCheckingOut}
                  >
                    {isCheckingOut ? "Обработка..." : "Оформить заказ"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;

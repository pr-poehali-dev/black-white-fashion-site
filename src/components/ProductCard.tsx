import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useCart } from "./CartContext";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (size?: string) => {
    const sizeToUse = size || selectedSize;
    if (!sizeToUse) {
      toast.error("Пожалуйста, выберите размер");
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: sizeToUse,
      image: product.image,
    });

    toast.success(`${product.name} (размер ${sizeToUse}) добавлен в корзину`);
    setIsDialogOpen(false);
    setSelectedSize("");
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 bg-white">
      <CardContent className="p-0">
        <div className="aspect-[3/4] overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg text-black mb-2 font-montserrat">
            {product.name}
          </h3>
          <p className="text-xl font-bold text-black">
            {product.price.toLocaleString()} ₽
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-2 p-4 pt-0">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Размеры
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Выберите размер</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className="h-12"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
              <Button
                onClick={() => handleAddToCart()}
                disabled={!selectedSize}
                className="w-full bg-black hover:bg-gray-800"
              >
                Добавить в корзину
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Button
          onClick={() => {
            if (product.sizes.length === 1) {
              handleAddToCart(product.sizes[0]);
            } else {
              setIsDialogOpen(true);
            }
          }}
          className="w-full bg-black hover:bg-gray-800"
        >
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

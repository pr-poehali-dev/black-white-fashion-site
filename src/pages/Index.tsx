import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "1",
    name: "Минималистичное пальто",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=600&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "Классический тренч",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "3",
    name: "Дизайнерский блейзер",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "4",
    name: "Элегантное платье",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "5",
    name: "Авторская рубашка",
    price: 8000,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "6",
    name: "Стильные брюки",
    price: 9500,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <title>Scarlato - Премиальная женская одежда</title>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4 font-montserrat">
            Дизайнерская коллекция
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Минималистичные решения для современного гардероба. Каждая вещь
            создана с вниманием к деталям и качеству.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;

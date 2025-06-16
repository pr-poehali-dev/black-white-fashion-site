import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "1",
    name: "DRKSHDW Ramones Sneakers",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop",
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  {
    id: "2",
    name: "Асимметричное пальто с драпировкой",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "3",
    name: "Объемное худи с удлиненными рукавами",
    price: 55000,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=600&fit=crop",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4",
    name: "Кожаная куртка с молниями",
    price: 95000,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "5",
    name: "Брюки с заниженной мотней",
    price: 38000,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "6",
    name: "Платье с драпировками и асимметрией",
    price: 65000,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
    sizes: ["XS", "S", "M", "L"],
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
            Авангардная коллекция
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Готическая эстетика и драматичные силуэты. Асимметричные кройки и
            минималистичная черно-белая палитра для смелых образов.
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

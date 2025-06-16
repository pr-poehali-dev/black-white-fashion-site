import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "./CartContext";

const Header = () => {
  const { itemCount } = useCart();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://cdn.poehali.dev/files/e3df63a0-8c9f-49a1-969d-6ad71dbd8818.jpg"
              alt="Scarlato"
              className="h-10 w-10 object-cover rounded-full"
            />
            <h1 className="text-2xl font-bold text-black font-montserrat">
              Scarlato
            </h1>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              Каталог
            </Link>

            <Link to="/cart" className="relative">
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingBag" size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;


import '../styles/navbar.css'
export const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md navbar">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <ul className="flex space-x-6 navbar-list">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>        
            </li>
        </ul>
      </div>
    </nav>
  );
}
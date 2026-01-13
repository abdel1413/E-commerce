export const navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">E-Commerce</div>
        <ul className="flex space-x-6">
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
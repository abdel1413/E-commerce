

  //  import "../styles/Input.css";
export const Input = () => {
  return (
    <div className="flex items-center w-1/2 mx-auto search-input-container ">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="ml-2 p-2 bg-blue-500 rounded-md cursor-pointer search-icon-container">
      <img src="images/icons/search-icon.png" alt="search icon" />
      </div>
    </div>
    )
};



  //  import "../styles/Input.css";
export const Input = ({searchItem, setSearchItem}) => {


    const handleChange = (e)=> {
      setSearchItem(e.target.value)
    }
  return (
    <div className="flex items-center w-full max-w-2xl mx-auto search-input-container  m-0  overflow-hidden shadow-md">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchItem}
        onChange={(e)=>handleChange(e)}
        className="flex-1  h-11  px-4 text-black border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="  h-11 px-4  flex items-center  justify-center cursor-pointer search-icon-container bg-[#FFA41C] rounded-r-xl ">
      <img src="images/icons/search-icon.png" alt="search icon" className="w-5 h-5 object-contain"/>
      </button>
    </div>
    )
};
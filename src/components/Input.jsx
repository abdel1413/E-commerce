


  //  import "../styles/Input.css";
export const Input = ({searchItem, setSearchItem}) => {


    const handleChange = (e)=> {
      setSearchItem(e.target.value)
    }
  return (
    <div className="flex items-center w-1/2 mx-auto search-input-container px-3 m-0 bg-blue-500">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full py-2 px-2 text-black border rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
         value={searchItem}
        onChange={()=>handleChange}
      />
      <button className=" py-1.5 px-2 cursor-pointer search-icon-container bg-[#FFA41C] rounded-r-xl ">
      <img src="images/icons/search-icon.png" alt="search icon" className="w-9 h-8.5"/>
      </button>
    </div>
    )
};
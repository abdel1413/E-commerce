


  //  import "../styles/Input.css";
export const Input = ({searchItem, setSearchItem}) => {


    const handleChange = (e)=> {
      setSearchItem(e.target.value)
    }
  return (
    <div className="flex flex-1 max-w-xl mx-2">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchItem}
        onChange={(e)=>handleChange(e)}
        className="
      flex-1
      min-w-0
      px-4
      py-3
      rounded-l-lg
      outline-none
      text-black
    "
      />
      <button  className="
      bg-yellow-400
      hover:bg-yellow-500
      px-4
      rounded-r-lg
      flex
      items-center
      justify-center
      shrink-0
    ">
      <img src="images/icons/search-icon.png" alt="search icon" className="w-5 h-5 object-contain"/>
      </button>
    </div>
    )
};
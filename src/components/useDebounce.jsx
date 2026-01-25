import { useEffect, useState } from "react"

export const useDebounce =(search, delay=500) =>{
    const [debounce, setDebounce] = useState("")

useEffect(()=>{
    const timer = setTimeout(() => {
      setDebounce(search)
    }, delay);
    
    return ()=> clearTimeout(timer)
},[search, delay])

return debounce
}
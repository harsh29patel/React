import React ,{ useEffect, useState } from "react"
import CurrencyDropdown from "./dropdown";
import { IoIosSwap } from "react-icons/io";

const CurrencyConverter = () => {

  const [currencies , setcurrencies] = useState({});
  const[amount , setamount]= useState(1);

  const[fromcurrency,setfromcurrency] = useState("USD")
  const[tocurrency,settocurrency] = useState("INR")

  const[convertedamount , setconvertedamount] = useState(null)
  const[converting , setconverting] = useState(false)
  const [favorites, setfavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || ["INR" , "USD"]);



    // Currencies-> // api.frankfurter.app/currencies
  const fetchCurrencies = async() => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies")
      const data= await res.json();
      setcurrencies(Object.keys(data));
    } catch (error) {
      console.log("error fetching", error);
    }
  };

  useEffect(()=>{ 
    fetchCurrencies()
  },[])
  console.log(currencies);

      // Conversion-> //  

  const convertCurrencies = async ()=>{
    if(!amount)return
    setconverting(true)
    try {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromcurrency}&to=${tocurrency}`)
      const data= await res.json();
      setconvertedamount(data.rates[tocurrency]+ "" + tocurrency)
    } catch (error) {
      console.log("error fetching", error);
    }finally{
      setconverting(false)
    }
  };

  const handlefavorites=(currency)=>{
    let updatedfavorties=[...favorites]
    if(favorites.includes(currency)){
      updatedfavorties = updatedfavorties.filter(fav=>fav!==currency)
    }
    else{
      updatedfavorties.push(currency)
    }

    setfavorites(updatedfavorties)
    localStorage.setItem("favorites", JSON.stringify(updatedfavorties))
  }


  const swapCurrencies=()=>{
    setfromcurrency(tocurrency)
    settocurrency(fromcurrency)
  }

  return (
    <div className="mx-w-xl m-x-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">CurrencyConverter</h2>


      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <CurrencyDropdown 
        favorites={favorites}
        currencies={currencies} 
        currency={fromcurrency}
        setCurrency={setfromcurrency}
        title="From:" 
        handlefavorites={handlefavorites}
        />
        {/* swap currency button */}

        <div className="flex justify-center -mb-5 sm:mb-0">
          <button onClick={swapCurrencies}
           className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
            <IoIosSwap className="text-xl text-gray-700"/>
          </button>
        </div>
        <CurrencyDropdown 
          favorites={favorites}
         currencies={currencies}  
         currency={tocurrency}
         setCurrency={settocurrency}
         title="To:"
        handlefavorites={handlefavorites}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="amount"
        className="block text-sm font-medium text-gray-700">
          Amount:</label>
       <input 
       value={amount}
       onChange={(e)=>setamount(e.target.value)}
       className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 mt-1"
       type="number"/>
      </div>

      <div className="flex justify-end mt-6 p-x">
      <button  onClick={convertCurrencies}
       className={`px-5  py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
      ${converting?"animate-pulse":""}`}>
        convert</button>  
      </div>

       { convertedamount &&
       (
       <div className="mt-4 text-lg font-medium text-right text-green-600">
        Converted Amount : {convertedamount}
      </div>)}
      </div>
  )
}

export default CurrencyConverter
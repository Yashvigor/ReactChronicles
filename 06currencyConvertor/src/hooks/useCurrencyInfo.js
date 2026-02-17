import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({}) // empty object if no value is returned or fetched from api
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json()) // the response is converted to json 
        .then((res) => setData(res[currency])) // data is hold 
        console.log(data);
    }, [currency]) // dependency array 
    console.log(data);
    return data 
}

export default useCurrencyInfo; 

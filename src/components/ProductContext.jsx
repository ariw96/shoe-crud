import React from 'react'
import {useState,createContext,useEffect} from 'react'
import axios from 'axios'

export const ProductContext = createContext()


export const ProductProvider = props=>{
    const api = "https://nameless-cove-68474.herokuapp.com/shoes";
	const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

	let compoundMounted = true;
	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			try {
				if (compoundMounted) {
				const response = await axios.get(api);
					setData(response.data.shoes);
					compoundMounted = false;
					console.log(response.data.shoes);
				}
			} catch (error) {
				console.log(error);
			}
		};
		
		getProducts();
	}, []);
    return(
        <ProductContext.Provider value={[data,setData]}>
            {props.children}
        </ProductContext.Provider>
    )
}


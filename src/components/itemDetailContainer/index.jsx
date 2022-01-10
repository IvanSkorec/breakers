import  { useEffect, useState } from "react"
import MockedItems from "../mock/index";
import {useParams} from "react-router-dom";
import ItemDetail from "../itemDetail"

const ItemDetailContainer = () => {
    
    const [items, setItems] = useState([]);
    const {id} = useParams()
    useEffect (() => {
        const itemPromise = new Promise((res, rej) => {
            const mydata =  MockedItems.find(item => item.id ===id)  
            res(mydata); 
        });
        itemPromise.then((res) => setItems(res))
    }, [id]);
    
    return(
        <>    
        <ItemDetail item={items} />
        </>
    )
};

export default ItemDetailContainer;

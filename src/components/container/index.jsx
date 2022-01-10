import  { useEffect, useState } from "react"
import MockedItems from "../mock/index";
import ItemList from "../itemlist/index";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {
    
    const [items, setItems] = useState([]);
    const {id} = useParams()
    useEffect (() => {
        const itemPromise = new Promise((res, rej) => {
            const mydata = id? MockedItems.filter(item => item.categoria===id) : MockedItems 
            res(mydata); 
        });
        itemPromise.then((res) => setItems(res))
    }, [id]);
    
    return(
        <>    
        <ItemList items={items} />
        </>
    )
};

export default ItemListContainer;

import {Link} from "react-router-dom"

const Item = ({item}) => (
    <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <Link to ={`/item/${item.id}`}><button >Ver Detalle</button></Link>
    </div>
)

export default Item;
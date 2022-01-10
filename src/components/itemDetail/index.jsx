const ItemDetail = ({item}) => (
    <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <img src= {item.pictureUrl} alt="" />
    </div>
)

export default ItemDetail;
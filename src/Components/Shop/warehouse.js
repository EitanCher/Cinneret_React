
function DisplayProds(trolley, setTrolley, prod) {
    function AddToTrolley() {
        setTrolley(trolley => [...trolley, prod]);
    }
    
    return(
        <>
        <div style={{padding: '5px', textAlign: 'center', direction: 'rtl'}}>
            <img alt='' src={prod.fileName} width="100" height="100"/>
            <p>{prod.descrip}</p>
            <p>{prod.price} שח</p>
            <button onClick={AddToTrolley}>להוסיף לעגלה</button>
        </div>
        </>
    );
}

export default function Products({trolley, setTrolley, products}){    
    return(
        <div style={{height: '89vh', display: 'flex'}}>
            {products.map(prod => DisplayProds(trolley, setTrolley, prod))}
        </div>
    )
}

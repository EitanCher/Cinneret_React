import {useLoaderData} from 'react-router-dom';

let searchid = 0;
let localProducts = [];

export default function AdminMainEdit({products, setProducts}){
    let myProduct = {};
    localProducts = [...products];
    let loaderData = useLoaderData();
    if(loaderData[0]) {
        myProduct = {...loaderData[0]};
    }

    function handleEditProd(event){
        event.preventDefault(); 
        let prodid = parseInt(event.target.form.prodid.value);
        let descrip = event.target.form.descrip.value;
        let price = parseInt(event.target.form.price.value);
        let image = event.target.form.image.value;
              
        setProducts(products.map(prod => {
                    if (prod.id === searchid) {
                        if (prodid === '') prodid = prod.id;
                        if (descrip === '') descrip = prod.descrip;
                        if (price === '') price = prod.price;
                        if (image === '') image = prod.fileName;
                    }
                    return {...prod, id: prodid, descrip: descrip, price: price, fileName: image};
                }
            )
        );

        // Clear inputs
        event.target.form.prodid.value = '';
        event.target.form.descrip.value = '';
        event.target.form.price.value = '';
        event.target.form.image.value = '';
    }
    return(
        <>
        <form style={{direction: 'rtl', margin: 'auto', textAlign: 'center', width: '400px'}}>
            <label>
                מק"ט:  <input type="text" name="prodid" value={myProduct.id}/>
            </label><br/><br/>
            <label>
                תיאור: <input type="text" name="descrip" value={myProduct.descrip}/>
            </label><br/><br/>
            <label>
                מחיר: <input type="text" name="price" value={myProduct.price}/>
            </label><br/><br/>
            <label>
                תמונה: <input type="text" name="image" value={myProduct.fileName}/>
            </label><br/><br/>
            <button type="submit" onClick={event => {handleEditProd(event)}}>עדכון המוצר</button>
        </form>
        </>
    )
}

export function loader({params})
{
    console.log('loaded products: ', localProducts)
    let prod = localProducts.filter(item => item.id === params.id);
    searchid = params.id;
    return prod;
}
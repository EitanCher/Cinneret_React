
export default function AdminMainNew({products, setProducts}){
    function handleNewProd(event){
        event.preventDefault(); 
        const prodid = parseInt(event.target.form.prodid.value);
        const descrip = event.target.form.descrip.value;
        const price = parseInt(event.target.form.price.value);
        const image = event.target.form.image.value;
              
        setProducts([...products, {id: prodid, descrip: descrip, price: price, fileName: image}]);

        // Clear inputs
        event.target.form.prodid.value = '';
        event.target.form.descrip.value = '';
        event.target.form.price.value = '';
        event.target.form.image.value = '';
    }
    return(
        <>
        <form style={{direction: 'rtl', margin: 'auto', textAlign: 'center', width: '400px'}}>
            <input type="text" name="prodid" placeholder='מק"ט'/><br/><br/>
            <input type="text" name="descrip" placeholder='תיאור'/><br/><br/>
            <input type="text" name="price" placeholder='מחיר'/><br/><br/>
            <input type="text" name="image" placeholder='כתובת תמונה' style={{direction: 'ltr'}}/><br/><br/>
            <button type="submit" onClick={event => {handleNewProd(event)}}>הוספת המוצר</button>
        </form>
        </>
    )
}


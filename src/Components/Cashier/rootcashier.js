import Header from '../Header/headerback';
import {useActionData, Form} from 'react-router-dom'

export default function Cashier({trolley, setTrolley, total}){
    let OrderData = useActionData();

    const sum = total.current;  // Total sum to pay
    const prods = trolley.map(prod => prod.id); // Array of product id's
    
    // Clear the Trolley:
    if(OrderData && total.current > 0) {    // "&&" is to avoid infinite loop
        total.current = 0;
        setTrolley([])
    }
    
    return(
        <>
        <Header/>
        <div style={{margin: 'auto', textAlign: 'center', width: '400px'}}>
            <h1>סה"כ לתשלום: {sum} ש"ח</h1>
        </div>
        <div style={{direction: 'rtl', margin: 'auto', textAlign: 'center'}}>
            <Form method='post'>
                <input name="address" placeholder='כתובת למשלוח'/><br/><br/>
                <input name="custid" placeholder='תעודת זהות הלקוח'/><br/><br/>
                <input name="sum" type="text" value={sum} hidden />
                <input name="prods" type="text" value={prods} hidden />
                <button type="submit">לתשלום</button>
            </Form>
        </div>      
        </>
    );
}

export async function action({request})
   {
		let formdata= await request.formData();
        let address = formdata.get('address');
        let custid = formdata.get('custid');
        let sum = formdata.get('sum');
        let prods = formdata.get('prods');
        alert(`כתובת: ${address},\n ת.ז.: ${custid},\n סכום: ${sum},\n מוצרים: ${prods}`);
        console.log(`address: ${address}, custid: ${custid}, sum: ${sum}, prods: ${prods}`)
        return {address: address, custid: custid, sum: sum, prods: prods};
   }

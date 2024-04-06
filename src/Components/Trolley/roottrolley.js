import {Link} from 'react-router-dom';
import Header from '../Header/headerback';

function setRow(myProd, setTrolley, cnt, trolley){
    return(
        <tr>
            <th><img alt='' src={myProd.fileName} width="50" height="50"/></th>
            <th>{myProd.descrip}</th>
            <th>{myProd.price} ש"ח</th>
            <th>
                <div style={{cursor: 'pointer', padding: '15px'}} onClick={() => setTrolley(trolley.filter((item, index) => index !== cnt))}>
                    &#10006;
                </div>
            </th>
        </tr>
    );
}
function GetTotal({trolley, total}){
    total.current = 0;
    for (let prod of trolley) { total.current += prod.price; }
    return total.current;
}
export default function Trolley({ trolley, setTrolley, total }){
    let cnt = 0;
    return (
        <>
        <Header/>
        {trolley.length === 0 ? 
            (<h3>העגלה ריקה!</h3>) : (<table>{trolley.map(prod => setRow(prod, setTrolley, cnt++, trolley))}</table>)
        }
        <div style={{direction: 'rtl', padding: '5px', margin: 'auto', textAlign: 'center'}}>
            <h3>סה"כ לתשלום: {GetTotal({trolley, total})} ש"ח</h3>
        </div>
        <br/>
        <Link to='/cashier'>
            <div style={{backgroundColor: 'lightgreen', width: '100px', padding: '5px', margin: 'auto', textAlign: 'center'}}>
                מעבר לקופה
            </div>
        </Link>
        </>
    );
}
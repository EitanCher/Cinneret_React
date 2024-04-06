// Elements related to "Edit" page are not accomplished
import {Link} from 'react-router-dom';
export default function AdminSide(){
    let editURL = '';
    function handleChange(e){
        editURL = '/admin/edit/' + e.target.value;
    }
    
    return(
        <>
            <br/>
            <Link to='/admin'>
                <div style={{border: 'black solid 1px', width: '80%', padding: '5px', margin: 'auto', textAlign: 'center'}}>
                    הוספת מוצר
                </div>
            </Link>
            <br/><br/><br/>
            <Link to={editURL}>
                <div style={{border: 'black solid 1px', width: '80%', padding: '5px', margin: 'auto', textAlign: 'center'}}>
                    עריכת מוצר
                </div>
            </Link>
            <br/>
            <p style={{margin: 'auto', textAlign: 'center'}}> 
                <input type="text" name="prodid" size="10" placeholder='קוד מוצר' onChange={handleChange}/>
            </p>
        </>
    )
}

import {Link} from 'react-router-dom';
import AdminLink from './adminlink'
export default function Headershop(){
    return(
        <header>
            <Link to='/trolley'><div class={"headerButton"}>מעבר לעגלה</div></Link>
            <AdminLink/>
        </header>
    );
}
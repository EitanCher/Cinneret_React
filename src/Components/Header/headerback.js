import {Link} from 'react-router-dom';
import AdminLink from './adminlink';
export default function headerToShop(){
    return(
        <header>
            <Link to='/'><div class={"headerButton"}>חזרה לחנות</div></Link>
            <AdminLink/>
        </header>
    );
}
import {Link} from 'react-router-dom';
export default function headeradmin(){
    return(
        <header>
            <Link to='/'><div class={"headerButton"}>חזרה לחנות</div></Link>
        </header>
    );
}
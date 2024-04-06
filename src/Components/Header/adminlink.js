import {Link} from 'react-router-dom';
export default function toAdmin(){
    return(
        <Link to='/admin' style={{position: 'absolute', right: '0', margin: '10px'}}>לדף המנהל</Link>
    );
}
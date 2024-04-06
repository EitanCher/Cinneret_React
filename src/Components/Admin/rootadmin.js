import {Outlet} from 'react-router-dom';
import Header from '../Header/headeradmin';
import SideBar from './adminside';

export default function Admin(){
    return(
        <>
            <Header/>
            <div style={{display: 'flex', width: '100%', height: '90vh', margin: 'auto 0'}}>
                <div style={{width: '20%', height: '99%', border: 'solid black 1px'}}>
                    <SideBar/>
                </div>
                <div style={{width: '79%', height: '99%', border: 'solid black 1px'}}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}
import Header from '../Header/headershop';
import Prods from './warehouse';

export default function Shop({trolley, setTrolley, products, setProducts}){
    return(
        <>
        <Header/>
        <Prods trolley={trolley} setTrolley={setTrolley} products={products} setProducts={setProducts}/>
        </>
    );
}
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {useState, useRef} from 'react';
import Shop from './Shop/rootshop';
import Trolley from './Trolley/roottrolley';
import Cashier, {action as a} from './Cashier/rootcashier';
import Admin from './Admin/rootadmin';
import AdminMainNew from './Admin/adminadd';
import AdminMainEdit, {loader as l} from './Admin/adminedit';
import img1111 from './Images/Pick.jpg';
import img2222 from './Images/Rake.png';
import img3333 from './Images/Shovel.png';

class myProd {
    constructor(id, fileName, descrip, price){
        this.id = id;
        this.fileName = fileName;
        this.descrip = descrip;
        this.price = price;
    }
}
const arrProds = [
    new myProd(1111, img1111, 'מקוש', 50),
    new myProd(2222, img2222, 'מגרפה', 60),
    new myProd(3333, img3333, 'את חפירה', 55)
];  

export default function Root(){
    let total = useRef(0);
    const [trolley, setTrolley] = useState([]);
    const [products, setProducts] = useState(arrProds);
    console.log('Current trolley: ', trolley);
    console.log('Current products: ', products);

    const myRouter = createBrowserRouter([
        {
            path: '/',
            element: <Shop trolley={trolley} setTrolley={setTrolley} products={products} setProducts={setProducts} />
        },
        {
            path: 'admin',
            element: <Admin products={products} setProducts={setProducts} />,
            children: [{
				index: true,
				element: <AdminMainNew products={products} setProducts={setProducts}></AdminMainNew>
			},
            {
                path: 'edit/:id',
                element:<AdminMainEdit products={products} setProducts={setProducts}></AdminMainEdit>,
                loader: l
            }]
        },
        {
            path: 'trolley',
            element: <Trolley trolley={trolley} setTrolley={setTrolley} total={total}/>
        },
        {
            path: 'cashier',
            element: <Cashier trolley={trolley} setTrolley={setTrolley} total={total}/>,
            action: a
        }
    ]);
    
    return (
        <>
            <RouterProvider router={myRouter}></RouterProvider>
        </>
    );
}

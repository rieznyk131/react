import './App.css'
import {products} from "./data/productsList.ts";
import type {IProduct} from "./models/IProduct.ts";
import MyProduct from "./components/my-product/myProduct.tsx";

function App() {


  return (

    <>
        {
            products.map((product: IProduct, index:number) => <MyProduct key={index} product={product} />
            )
        }
    </>
  )
}

export default App

import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../../services/api.service.ts";
import type {IProduct} from "../../models/IProduct.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";

export const AuthResourcesComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        loadAuthProducts() //виклик функції, котра буде виводити ресурси для авторизованих користувачів

            //якщо запит успішний - виводимо в консоль масив products
            .then(products => {
                setProducts(products);
            })

            //якщо сталась помилка, то ловимо її та виводимо в консоль
            .catch(reason => {
                console.log(reason);

                //викликаємо функцію refresh для оновлення access токену, після чого знову робимо запит на вивід всіх продуктів та відображаємо їх в консолі
                refresh().then(() => loadAuthProducts()).then(products =>  setProducts(products))
            })
    }, []);
    return (
        <div className='grid grid-cols-3 gap-3 place-items-center w-full mt-10 mb-10'>
            {
                products.map(product => <ProductComponent product={product} key={product.id}/>)
            }
        </div>
    );
};
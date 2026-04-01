import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../../models/ICart.ts";
import type {ICartResponseModel} from "../../../models/ICartResponseModel.ts";
import {cartService} from "../../../services/api.services.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";



export const CartsComponent = () => {
    const {id} = useParams()
const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        if(id) {
            cartService.getCartsOfUser(id)
                .then(({carts}: ICartResponseModel) => {
                    setCarts(carts)
                });
        }

    },[id])

    return (
        <div>
            {
                carts.map((cart: ICart) => <CartComponent key={cart.id} item={cart}/>)
            }
        </div>
    );
};
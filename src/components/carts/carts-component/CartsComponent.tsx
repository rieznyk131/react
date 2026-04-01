import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../../models/ICart.ts";
import type {ICartResponseModel} from "../../../models/ICartResponseModel.ts";
import {cartService} from "../../../services/api.services.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";
import type {IUser} from "../../../models/IUser.ts";


export const CartsComponent = () => {
    const location = useLocation();
    const user = location.state?.user as IUser | null;
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
            <h1 className='text-2xl mb-5'>{user ? `${user.firstName +" "+ user.lastName} Cart` : "User Cart"}</h1>
            {
                carts.map((cart: ICart) => <CartComponent key={cart.id} item={cart}/>)
            }
        </div>
    );
};
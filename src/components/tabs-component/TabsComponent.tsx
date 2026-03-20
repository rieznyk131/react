import {type FC, useState} from "react";
import type {IProductModel} from "../../models/IProductModel.ts";
import '../product-component/product-component-style.css'

type TabsPropsType = {
    item: IProductModel;
}

// export const TabsComponent: FC<TabsPropsType> = ({item}) => {
//     const [activeTab, setActiveTab] = useState('')
//     return (
//         <div className={'product-details-tabs'}>
//             <input
//                 type="radio"
//                 name='tab-btn'
//                 id='tab-btn-product-details'
//                 checked={activeTab === 'details'}
//                 onChange={() => setActiveTab('details')}
//             />
//             <label htmlFor="tab-btn-product-details">Product details</label>
//             {activeTab === 'details' && (
//                 <div className="tabs-content  product-details">
//                     <ul>
//                         <p>Brand: {item.brand}</p>
//                         <p>SKU: {item.sku}</p>
//                     </ul>
//                 </div>
//             )}
//
//             <input
//                 type="radio"
//                 name='tab-btn'
//                 id='tab-product-dimensions'
//                 checked={activeTab === 'dimensions'}
//                 onChange={() => setActiveTab('dimensions')}
//             />
//             <label htmlFor="tab-product-dimensions">Dimensions</label>
//             {activeTab === 'dimensions' && (
//                 <div className="tabs-content  dimension-details">
//                     <ul>
//                         <li>Weight: {item.weight}</li>
//                         <li>Width: {item.dimensions.width}</li>
//                         <li>Height: {item.dimensions.height}</li>
//                         <li>Depth: {item.dimensions.depth}</li>
//                     </ul>
//                 </div>
//             )}
//             <input
//                 type="radio"
//                 name='tab-btn'
//                 id='tab-warranty-shipping-info'
//                 checked={activeTab === 'sipping'}
//                 onChange={() => setActiveTab('shipping')}
//             />
//             <label htmlFor="tab-warranty-shipping-info">Warranty & Shipping Information</label>
//             {activeTab === 'shipping' && (
//                 <div className="tabs-content shipping-info">
//                     <p>Warranty: {item.warrantyInformation}</p>
//                     <p>Shipping: {item.shippingInformation}</p>
//                 </div>
//             )}
//         </div>
//     )
// }

export const Tabs: FC<TabsPropsType> = ({item}) => {
    const [activeTab, setActiveTab] = useState<string | null>("");

    const handleTab = (tab: string) => {
        setActiveTab(prev => (prev === tab ? null : tab));
    };

    return (
        <div className={'product-details-tabs'}>
            <button className='font-semibold' onClick={() => handleTab("details")}>
                Product details
            </button>

            {activeTab === "details" && (
                <div className={'tab-content  product-info'}>
                    <ul>
                        <li>Brand: {item.brand}</li>
                        <li>SKU: {item.sku}</li>
                    </ul>

                </div>
            )}

            <button className='font-semibold' onClick={() => handleTab("dimensions")}>
                Dimensions
            </button>

            {activeTab === "dimensions" && (
                <div className={'tab-content product-dimension'}>
                    <ul>
                        <li>Weight: {item.weight}</li>
                        <li>Width: {item.dimensions.width}</li>
                        <li>Height: {item.dimensions.height}</li>
                        <li>Depth: {item.dimensions.depth}</li>
                    </ul>
                </div>
            )}

            <button className='font-semibold' onClick={() => handleTab('shipping')}>
                Warranty & Shipping Information
            </button>

            {activeTab == 'shipping' && (
                <div className={'tab-content product-shipping'}>
                    <ul>
                        <li>Warranty: {item.warrantyInformation}</li>
                        <li>Shipping: {item.shippingInformation}</li>
                        <li>Return Policy: {item.returnPolicy}</li>
                    </ul>
                </div>
            )
            }
        </div>
    );
};
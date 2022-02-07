
import { ADD_CART, ADD_PRODUCTS, CHANGE_QTY, CHOOSE_SHIPPING, REMOVE_PRODUCT, SAVE_ADDRESS,SAVE_PACKAGING, SAVE_USER } from "../constants/action-types";

export const addToCart=(payload)=>{
    return{type:ADD_CART,payload}
};

export const changeQty=(payload)=>{
    return{type:CHANGE_QTY,payload}
}
export const deleteItem=(payload)=>{
    return {type:REMOVE_PRODUCT,payload}
}
export const chooseShipping=(payload)=>{
    return {type:CHOOSE_SHIPPING,payload}
}
export const addProducts=(payload)=>{
    return {type:ADD_PRODUCTS,payload}
}

export const saveAddress=(payload)=>{
    return{type:SAVE_ADDRESS,payload}
}
export const savePackaging=(payload)=>{
    return {type:SAVE_PACKAGING,payload}
}
export const saveUser=(payload)=>{
    return {type:SAVE_USER,payload}
}
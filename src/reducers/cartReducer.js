import { ADD_CART,ADD_PRODUCTS,CHANGE_QTY, CHOOSE_SHIPPING, REMOVE_PRODUCT, SAVE_ADDRESS, SAVE_PACKAGING,SAVE_USER } from "../constants/action-types";

const initialState={
    user:[],   
    products:[],
    items:[],
    addedItems:[],
    total:0,
    shipping:100,
    address:[],
    packaging:0,
}
const CartReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case ADD_CART:
            let id=action.payload.id;
            let products=state.products.find(product=>product.product_id==id)
            if(products){
            if(state.items.length>0){
                let exist=state.items.find(item=>item.id===id)
                if(exist){
                    const newArray=[...state.items]
                    let index=state.items.indexOf(exist)
                    newArray[index].qty+=(action.payload.qty)
                //return{...state,items:state.items,total:state.total+1}
                return{...state,items:newArray,total:(state.total)+(action.payload.qty)}
                
                }else{
                    
                action.payload.price=products.productPrice
                action.payload.url=products.imageUrl
                action.payload.name=products.productName
                    return{...state,items:state.items.concat([action.payload]),total:(state.total)+(action.payload.qty)}     
                }
            } else{
                action.payload.price=products.productPrice
                action.payload.url=products.imageUrl
                action.payload.name=products.productName
                return{...state,items:([action.payload]),total:(state.total)+(action.payload.qty)} 
            } }else{
                
                return {...state}
            }
            
            case CHANGE_QTY:
                let qty=action.payload.qty    
            if(!isNaN(qty)){
                let total=state.total;
                let p_id=action.payload.id
                
                let exist=state.items.find(item=>item.id===p_id)
                const newArray=[...state.items]
                let index=state.items.indexOf(exist)
                    total-=newArray[index].qty
                    total+=qty
                newArray[index].qty=parseInt(qty)
                return{...state,items:newArray,total:total};
                }
                else{
                    let pid=action.payload.id;
                let exists=state.items.find(item=>item.id===pid)
                const newDelArray=[...state.items]
                
                let ind=state.items.indexOf(exists)
                let totals=state.total-(newDelArray[ind].qty);
                
                newDelArray.splice(ind,1)
                
                return {...state,items:newDelArray,total:(totals)}    
                }
        
            case REMOVE_PRODUCT:
                let pid1=action.payload.id;
                
                let exists1=state.items.find(item=>item.id===pid1)
                const newDelArray1=[...state.items]
                
                let ind1=state.items.indexOf(exists1)
                
                let totals=state.total-(newDelArray1[ind1].qty);
                
                newDelArray1.splice(ind1,1)
                
                return {...state,items:newDelArray1,total:(totals)}
            case CHOOSE_SHIPPING:
                return{...state,shipping:Number(action.payload.shipping)}  
            case ADD_PRODUCTS:
                return {...state,products:action.payload.data}    
            case SAVE_ADDRESS:
                
                return{...state,address:action.payload.address}    
            case SAVE_PACKAGING:
                return {...state,packaging:action.payload.packaging}     
            case SAVE_USER:
                
                return {...state,user:action.payload.user}     
            default:
                return state;
    }
}

export default CartReducer;
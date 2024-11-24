const intialState = {
    products:[],
    addtocart:[],
}

export const productReducer = (state=intialState,{type,payload})=>{

    switch(type){
        case "allproduct":
            return {product:[...payload]}
        case "addtocart":
            return {...state,addtocart:[...payload]}
        case "deleteproduct":
            return {...state,addtocart:[...payload]}
        default:
            return state    
    }

}
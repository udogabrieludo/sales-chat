
export const initial ={
    sales: null,
    loading: false
}


export const salesReducer =(state, action) =>{
    switch(action.type) {
        case "FETCHING" :
            return {...state, loading: true};
        case "SUCCESS":
            return {...state, loading:false, sales:action.payload};
        default :
        return state;    
    }
}
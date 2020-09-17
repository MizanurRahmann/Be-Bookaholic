export const initialState = {
    basket: [],
    total: 0,
    user: {name: ''},
    authenticated: false,
    loading: false
}

function reducer(state, action){

    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter((value) => { return value.id !== action.itemId; })
            }
        case 'CREATE_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_AUTHENTICATED':
            return {
                ...state,
                authenticated: true,
            };
        case 'SET_LOGOUT':
            return {
                ...state,
                authenticated: false,
                user: null,
            };
        case 'SET_LOADING':
            return{
                ...state,
                loading: true
            }
        case 'CLEAR_LOADING':
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer;
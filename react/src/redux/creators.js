

export  const addProductToCart = (id, count,price)=>{

    return {
        type: "ADD_TO_CART",
        id: id,
        count:count,
        price: price
    }
};
export const getCardFromApi = (card)=>{
    return {
        type: "GET_CARD_FROM_API",
        card: card
    }
};

export const removeProductFromCart = (id) =>{
    return {
        type: "REMOVE_FROM_CART",
        id: id,

    }
};
export const switchPopup = (popup) =>{
    return {
        type: "POPUP",
        popup: popup,

    }
};

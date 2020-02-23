
export const Card = (state={}, action) =>{
    switch (action.type) {
        case "ADD_TO_CART": {
            let stateCopy = state;
            let object = {id: action.id, count: action.count, price: action.price};
            if(stateCopy.card.length === 0)
            {

                stateCopy.card[0]= object;
            }else{
                stateCopy.card.map((el, index, array) => {
                    if(index === array.length - 1)
                    {
                        array[index + 1] = object;
                    }
                    if(el.id === action.id)
                    {
                            array[index] = object;
                    }

                });
            }

            return stateCopy
        }
        case "REMOVE_FROM_CART": {
            let stateCopy = state;
            let element;
            stateCopy.card.map((el, index, array) => {
                el.id === action.id ? array.splice(index ,1)  :  void 0;
            });

            return stateCopy
        }

        case "GET_CARD_FROM_API":

            return{
                ...state,
                card: action.card
        };


        default:

            return state;

    }
};
export const Popups = (state, action) => {
    switch (action.type) {
        case "POPUP": {

            let stateCopy = state;

            stateCopy.popups.map((el) => {

                if(el.name === action.popup)
                {
                    el.value = !el.value;
                }
            });

            return {...state,
            popups: stateCopy.popups

            }

        }
        default:
            return{
            popups: [
            {
                name:"oferta",
                value:false
            },
            {
                name:"politic",
                value:false
            },
            {
                name:"soglasie",
                value:false
            }
        ]
    }
    }
};

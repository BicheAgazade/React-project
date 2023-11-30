import { ADD_TO_BASKET } from "./ActionsNames"

const addToBasket = (index) => {
    return {
        type: ADD_TO_BASKET,
        info: "Add to basket...",
        index: index
    }
}
export default addToBasket
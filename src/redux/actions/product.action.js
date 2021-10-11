import FakerService from "../../services/faker.service"
import { FETCH_PRODUCTS } from "../constants/action.type";

export const getProducts = () => {
    return (dispatch) => {
        FakerService.getProducts(8).then((products) => {
            dispatch({ type: FETCH_PRODUCTS, payload: products });
        });
    }
};
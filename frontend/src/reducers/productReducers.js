import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  // De acuerdo a la acción que le pasemos actuará el reducer
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      // Loading value, cuando hacemos el request, queremos que el
      // componente sepa que estamos haciendo el fetch y retornamos
      // los productos vacios, porque todavia no hemos hecho el fetch
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      // Loading false, porque ya hizo el request y
      // products estara lleno con el objeto action que tendra un
      // payload attached to it
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      // Loading false, ya cargo pero hay un error
      // El error lo enviaremos en el payload
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

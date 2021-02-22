import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

/**
 * el cartReducer toma el estado inicial y la acción
 */
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      /**
       * Tenemos que manejar el agregar al carrito si ya existe
       * el item en el carrito
       *
       * payload
       *  product: data._id
       */
      const item = action.payload;

      /**
       * Buscamos en el estado si el item ya existe por ID
       */
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        /**
         * por cada uno de los productos del carItems hacemos un map
         * si el ID = al item que esta entrando pues devuelve el item
         * sino, deja el X
         */

        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        /**
         * Si no existe el item, le hacemos push al array
         */
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      /**
       * Como vamos a remover, vamos a filtrar el item que estamos removiendo
       * Vamos a filtrar todos los que el x.id no coincida con el payload
       */
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    default:
      return state;
  }
};

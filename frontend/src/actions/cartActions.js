import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  /*
    Una vez hagamos el dispatch, queremos guardar
    en el local storage, para eso usamos el
    localStorage API
    Lo guardaremos como cartItems
    Queremos guardar todo el carro
    Aca usamos el getState que nos permite ingresar al
    arbol de estado de la app
    Y le decimos, que queremos usar el cartItem

    En el localStorage solo podemos guardar strings,
    por eso usamos JSON.stringify

    Está guardado en el localStorage, pero donde
    lo hacemos que se agregue al estado?
    En el store.js
  */

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  /**
   * Location busca todo lo que aparece despues de la ?
   * Si existe, divide ?qty=1 en 2 donde encuentre un =
   * es decir, creara el array [?qty, 1]
   * como es un string que viene de la URL, usamos Number
   * Para convertirlo en un numero
   */
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  /**
   * Queremos mostrar los elementos del carrito que ya tenemos
   * en el estado,
   */

  const cart = useSelector((state) => state.cart);
  // del estado cart, queremos tomar solo cartItems y mostrarlo en la vista
  const { cartItems } = cart;

  /**
   * Solo queremos hacer dispatch add to CART si hay un
   * product ID en el URL cuando entramos a la pagina de CART
   */
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>Cart</div>;
};

export default CartScreen;

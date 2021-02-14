import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  // Estamos buscando en los productos, el producto cuyo ID coincida con el
  // id enviado en la ruta en APP.js
  // <Route path='/product/:id' component={ProductScreen} />
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
    </>
  );
};

export default ProductScreen;

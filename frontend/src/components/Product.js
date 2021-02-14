import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

// Como este componente está recibiendo el product del map que realizamos en el HomeScreen.js
// Se podria usar const Product = (props) => {} ....
// Pero usando corchetes es otra manera de acceder a lo que le envia el componente
// Estamos usando deconstruccion!
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>$ {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

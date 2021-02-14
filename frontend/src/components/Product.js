import React from "react";
import { Card } from "react-bootstrap";

// Como este componente está recibiendo el product del map que realizamos en el HomeScreen.js
// Se podria usar const Product = (props) => {} ....
// Pero usando corchetes es otra manera de acceder a lo que le envia el componente
// Estamos usando deconstruccion!
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as='h3'>$ {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

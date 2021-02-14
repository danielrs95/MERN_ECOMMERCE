import React from "react";
import { Card } from "react-bootstrap";

// Como este componente está recibiendo el product del map que realizamos en el HomeScreen.js
// Se podria usar const Product = (props) => {} ....
// Pero usando corchetes es otra manera de acceder a lo que le envia el componente
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>
    </Card>
  );
};

export default Product;

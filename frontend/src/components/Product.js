import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Product(props) {
  const { product } = props;
  
  return (
    <Card>
      <img
        src={"/images/p1.jpg"}
        className="card-img-top"
        alt={product.p_name}
      />

      <Card.Body>
        <Link to={`/product/${product.p_id}`}>
          <Card.Title>{product.p_name}</Card.Title>
        </Link>
        <Card.Text>{product.p_price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;

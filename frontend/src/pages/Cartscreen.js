// import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
import axios from "axios";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/esm/Button";
import { removetoCart } from "../utils/removetoCart";
import { useNavigate } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

function Cartscreen() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [Items, setItems] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://localhost:8800/api/cart_product/cartscreen"
      ); //in this result put in to this result varible

      setCartItems(result.data);
    };
    fetchData();
  }, [Items]);

  const handleClick = (cart_id) => {
    removetoCart(cart_id);
    setItems(!Items);
  };
  const gotobuy = () => {
    navigate("/buy");
  };

  let price = 0;

  return (
    <div>
      <Header />
      <div className="d-flex flex-column">
        <Container>
          <div className="ABody">
            <h1>Shopping cart</h1>
            <Row>
              {cartItems.length === 0 ? (
                <Alert variant="dark">
                  Cart is empty{" "}
                  <Alert.Link href="/">Go for shopping</Alert.Link>
                </Alert>
              ) : (
                cartItems.map((product) => (
                  <Col key={product.p_id} md={8}>
                    <ListGroup>
                      <ListGroup.Item key={product.p_id}>
                        <Row className="align-items-center">
                          <Col md={3}>
                            <img
                              className="img-large img-fluid rounded img-thumbnail"
                              src={`/upload/${product.p_image}`}
                              alt={product.p_name}
                            ></img>
                          </Col>
                          <Col md={2}>${product.p_price}</Col>
                          <Col md={4}>{product.p_name}</Col>
                          <Col md={3}>
                            <Button
                              variant="light"
                              onClick={() => handleClick(product.cart_id)}
                            >
                              <i className="fas fa-trash"></i>
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                ))
              )}
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <h3>
                          <h3>Subtotal {cartItems.length} items:</h3>
                          {cartItems.map((data) => {
                           return price += parseInt(data.p_price, 10);
                          })}
                          TotalPrice__${price}
                        </h3>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <div className="d-grid">
                          <Button
                            type="button"
                            variant="warning"
                            onClick={() => gotobuy()}
                          >
                            Buy
                          </Button>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Cartscreen;

import axios from "axios";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Product from "../components/Product";
import Header from "../components/Header";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

function AccessoriesScreen() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Header />
      <div className="d-flex flex-column">
        <Container>
          <div className="ABody">
            <Nav className="ml-auto">
              <Form inline="true">
                <Form.Control
                  type="text"
                  placeholder="Search Filter"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            </Nav>
            <h1>Accessories</h1>
            <div className="products">
              <Row>
                {products
                  ?.filter((cat) => cat.cat_id === 3)
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.p_name.toLowerCase().includes(search);
                  })
                  .map((product) => {
                    return (
                      <Col sm={6} md={4} lg={3} className="mb-3">
                        <Product product={product}></Product>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default AccessoriesScreen;

import React, {  useEffect, useState } from "react";
import Product from "./product";
import Prods from "../products.json"
import { Alert, Col, Container, Row } from "react-bootstrap";
import ProductDetail from "../components/productDetails";
import { useParams } from "react-router-dom";

function Products(props) {
 
    const [alertVisible, setAlertVisible] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const {name} = useParams();
    useEffect(() => {
      console.log(name)
     let cp=Prods.find((prod)=>prod.name===name);

      if (cp)
      setCurrentProduct(cp)
      else
      setCurrentProduct(null)
    }, [name])
 
useEffect(() => {
  setAlertVisible(true)
  setTimeout(() => { 
setAlertVisible(false)        }, 3000);}, [])
    return (
      <Container >
<Alert variant="success"  show={alertVisible}><Alert.Heading>Hey, Welcome To Our Shop <strong>MyStore</strong></Alert.Heading>
<p>Thank you for choosing our store, we hope you enjoy your shopping experience!</p></Alert>
        <Row className="mt-5">
          
        {currentProduct==null? Prods.map((prod,i) => 
        (<Col key={i}><Product  product={prod} ></Product></Col>))
        : <ProductDetail product={currentProduct} /> }
        </Row>
      </Container>
    )
  
}

export default Products;
import { useState } from "react";
import { Alert, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product(props) {
    const [product, setProduct] = useState(props?.product);
    const [alertVisible, setAlertVisible] = useState(false);

    const addLike=()=> {
      
        setProduct({...product,like:product.like+1});
    }
    const removeQuantity=() => {
        setProduct({...product,quantity:product.quantity-1});
        handleVisible();
    }
    const handleVisible=() => { 
        setAlertVisible(true)
        setTimeout(() => { 
            setAlertVisible(false)
        }, 2000);
    } 
   

  
    return (
        <>
        <Card  className={product.like>5? "bestProduct p-2":"p-2"}>



            <Card.Img style={{height:'20rem'}} variant="top" src={require('../assets/images/'+product.img)} />
            <Card.Title  ><Link to={"/"+product.name}>{product.name}</Link></Card.Title>
            <Card.Body>{product.description}</Card.Body>
            <Card.Body>{product.price}DT</Card.Body>
            <Row><Col><Button variant="primary" onClick={()=>addLike()}>Like👍</Button></Col> <Col><small>{product.like}</small></Col></Row>
            <br/>
            <Row><Col><Button variant="dark" onClick={()=>removeQuantity()} disabled={product.quantity===0}>Buy💲</Button></Col><Col> <small>{product.quantity}</small></Col></Row>
      
            </Card>
              <Alert variant="primary" show={alertVisible}  >You bought an Item</Alert>    
              </>
  
    )

}
export default Product;
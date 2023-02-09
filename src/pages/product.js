import { Component } from "react";
import { Alert, Button, Card, Col, Row } from "react-bootstrap";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {like:this.props?.product.like,quantity:this.props?.product.quantity,alertVisible:false};
        this.addLike = this.addLike.bind(this);
        this.removeQuantity = this.removeQuantity.bind(this);
        this.handleVisible = this.handleVisible.bind(this);
    }
    addLike() {
        this.setState((oldState)=>({like:oldState.like+1}));
    }
    removeQuantity() {
        this.setState((oldState)=>({quantity:oldState.quantity-1}));
        this.handleVisible();
    }
     handleVisible = () => { 
        this.setState({alertVisible:true})
        setTimeout(() => { 
            this.setState({alertVisible:false})
        }, 2000);
    } 
   
  render() {
  
    return (
        <Card >




            <Card.Img style={{maxHeight:'20rem'}} variant="top" src={require('../assets/images/'+this.props?.product.img)} />
            <Card.Title>{this.props?.product.name}</Card.Title>
            <Card.Body>{this.props?.product.description}</Card.Body>
            <Card.Body>{this.props?.product.price}DT</Card.Body>
            <Row><Col><Button variant="primary" onClick={this.addLike}>Like👍</Button></Col> <Col><small>{this.state?.like}</small></Col></Row>
            <br/>
            <Row><Col><Button variant="dark" onClick={this.removeQuantity} disabled={this.state?.quantity===0}>Buy💲</Button></Col><Col> <small>{this.state?.quantity}</small></Col></Row>
        <Alert variant="primary" show={this.state?.alertVisible}  >You bought an Item</Alert>    
            </Card>
  
    )
  }
}
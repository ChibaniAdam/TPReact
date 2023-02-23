import { Link, useNavigate } from "react-router-dom";

function ProductDetail(props){
const navigate = useNavigate()
    return (
        <>
        <div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={require('../assets/images/'+props.product.img)}className="card-img mt-4" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">{props.product.name}</h3>
        <h5 className="card-title">Description</h5>

        <p className="card-text" style={{marginLeft: "1rem"}}>{props.product.description}</p>
        <h5 className="card-title">Price</h5>

<p className="card-text" style={{marginLeft: "1rem"}}>{props.product.price}</p>
<h5 className="card-title">Likes</h5>

<p className="card-text" style={{marginLeft: "1rem"}}>{props.product.like}</p>
        <p className="card-text"><small className="text-muted">{props.product.quantity>0? "Available":"Out of stock"}</small></p>
      </div>
    </div>
  </div>
</div>
<button className="btn btn-primary" onClick={()=>navigate("/")}>Go back</button>
        </>
    )
}

export default ProductDetail;
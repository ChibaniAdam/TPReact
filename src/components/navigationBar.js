import { Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";


function NavigationBar(props){

    return (
        <Navbar className="p-2">
            <NavbarBrand > <Link to="/" className="text-dark">MyStore</Link></NavbarBrand>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink ><Link to="/" className="text-dark">Products</Link></NavLink>
      </li>
   
    </ul>
  </div>
</Navbar>
    )
}

export default NavigationBar;
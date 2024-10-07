import { useState } from "react";
import "../../styles/headerstyle.css";
import {Container,Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from "../../assets/logo/logo.png";

const Header = ()=>{
    const[nav,setnav] = useState(false);

    //scroll nav
    const changevalueonscroll = ()=>{
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 100 ? setnav(true) : setnav(false);
    }
    window.addEventListener("scroll",changevalueonscroll);

    return(
        <header>
        <Navbar collapseOnSelect expand="lg" className={`${nav==true ? "sticky": ""}`}>
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="Logo" className="img-fluid"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/"> Home </Nav.Link>
                    <Nav.Link as={Link} to="/about"> About </Nav.Link>
                    <Nav.Link as={Link} to="/menu"> Menu </Nav.Link>
                    <Nav.Link as={Link} to="/shop"> Shop </Nav.Link>
                    <Nav.Link as={Link} to="/blog"> Blog </Nav.Link>
                    <Nav.Link as={Link} to="/contact"> Contact </Nav.Link>
                    <Nav.Link as={Link} to="/cart"> 
                        <div className="cart">
                            <i className="bi bi-bag fs-5"></i>
                            <em className="roundpoint">0</em>
                        </div>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}
export default Header;

<i class="bi bi-bag"></i>
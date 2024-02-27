import { Navbar, Nav, NavDropdown, Container, Offcanvas, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import NgipopLogo from "../assets/img/NgipopLogo.png"
import Swal from "sweetalert2";

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [show, setShow] = useState(false);
    let navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                Swal.fire('Success', res.data.message, 'success');
                navigate("/")
            }
        })
    }

    var AuthButtons = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
            <div className="right-navbar nav">
                <Link className="btn btn-outline rounded-1 fs-5" to='/login'>LOGIN</Link>
            </div>
        )
    } else {
        AuthButtons = (
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a
                        data-mdb-dropdown-init
                        className="nav-link dropdown-toggle d-flex align-items-center"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        aria-expanded="false"
                    >
                        <FontAwesomeIcon icon={faCircleUser} />
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                            <a className="dropdown-item" href="#">My profile</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Settings</a>
                        </li>
                        <li>
                            <a className="dropdown-item" role="button" onClick={logoutSubmit} href="#">Logout</a>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={NgipopLogo}
                            width="80"
                            height="52"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavDropdown title="ARTIST" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">NCT</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">NCT DREAM</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">NCT 127</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">NCT U</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">RIIZE</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">EXO</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">STRAY KIDS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">SEVENTEEN</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">BTS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">SUPER JUNIOR</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">AESPA</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">RED VELVET</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">LEE SERAFIM</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">SNSD</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">TWICE</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">BLACKPINK</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">NEWJEANS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">ITZY</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">(G)I-DLE</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">GFRIEND</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="MUSIC" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">ALBUM</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">DELUXE BOX</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="OFFICIAL MD" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">OFFICIAL FANLIGHT</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">OFFICIAL POP UP MD</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">TOUR & FANMEETING MD</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">PHOTOCARD</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/">EVENT</Nav.Link>
                        </Nav>

                        <div className="right-navbar-nav">
                            {AuthButtons}
                            <Link variant="primary" onClick={handleShow} className="search-icon me-2">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Link>
                            <Offcanvas show={show} onHide={handleClose} placement="end">
                                <Offcanvas.Header closeButton>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Offcanvas.Body>
                            </Offcanvas>
                            <Link className="cart-icon btn btn-no-outline fs-4" to="/cart">
                                <FontAwesomeIcon icon={faBagShopping} />
                                <span className="cart-quantity">0</span>
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header
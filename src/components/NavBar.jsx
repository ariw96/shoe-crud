import React,{useState,useContext} from "react";
import { ProductContext } from "./ProductContext";
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Container,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavBar(props) {
	const [data, setData] = useContext(ProductContext);
	
	return (
		<>
			<Navbar bg="warning" expand="lg">
				<Container>
					<Navbar.Brand className="fw-bold">MY-CRUD SHOE APP</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="mx-auto my-2 my-lg-0">
							<Link to="/" className="fw-bold">
								<Button
									variant="outline-dark"
									className="fa-solid fa-house-blank me-2"
								>
									{" "}
									Home
								</Button>
							</Link>
							<Link to="buttons">
								<Button variant="outline-dark" className=" me-2">
									{" "}
								Total Shoes: {data.length}
								</Button>
							</Link>

							<Button variant="outline-dark" className=" me-2">
								{" "}
								About
							</Button>

							<Button variant="outline-dark" className=" me-2">
								{" "}
								Contact
							</Button>
						</Nav>
						<div className="d-flex ms-2">
							<Link to="/cart">
								<Button
									variant="outline-dark"
									className="fa fa-shopping-cart me-2"
								>
									{" "}
									Cart
								</Button>
							</Link>
							<Link to="/register">
								<Button variant="outline-dark" className="fa fa-user-plus me-2">
									{" "}
									Register
								</Button>
							</Link>
							<Link to="/login">
								<Button variant="outline-dark" className="fa fa-sign-in me-2">
									{" "}
									Login
								</Button>
							</Link>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
export default NavBar;

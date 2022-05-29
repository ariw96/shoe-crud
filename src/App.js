import React from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/Home";
import Buttons from "./components/Buttons";
import EditShoe from "./components/EditShoe";
import AddShoes from "./components/AddShoes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./components/ProductContext";
import AddReview from "./components/AddReview";
import "./App.css";




function App() {
	
	return (
		<ProductProvider>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="buttons" element={<Buttons />} />
                    <Route  path=":id" element={<EditShoe />} />
                    <Route path="/review/:id" element={<AddReview />} />
					<Route path="add" element={<AddShoes />} />
				</Routes>
			</Router>
		</ProductProvider>
	);
}

export default App;

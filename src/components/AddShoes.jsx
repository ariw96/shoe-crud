import axios from "axios";
import React, { useState, useContext } from "react";
import { Button,  Form, Stack } from "react-bootstrap";
import { ProductContext } from "./ProductContext";

import ShowProducts from "./ShowProducts";

const AddShoes = (props) => {
	const [data, setData] = useContext(ProductContext);
	const [url, setUrl] = useState("");
	const [name, setName] = useState("");
	const [price, setPrice] = useState(10);

	const handleUrlChange = (e) => {
		setUrl(e.target.value);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handlePriceChange = (e) => {
		setPrice(e.target.value);
	};

	const handleData = async(e) => {
		e.preventDefault();
		setData([...data, { id: `${data.length + 1}`,image: url, name: name, price: price }]);
		setUrl("");
		setName("");
		setPrice(10);
		try {
			const res = await axios.post("http://localhost:3001/shoes", {
				id: `${data.length + 1}`,
				image: url,
				name: name,
				price: price,
				review: [],
				rating: []
			});
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	
	};

	return (
		<div>
			<Stack gap={2} className="col-md-5 mx-auto mt-5">
				<Form className="mb-3">
					<label>Enter details</label>
					<Form.Control
						type="text"
						placeholder="Enter name"
						value={name}
						onChange={handleNameChange}
					/>
					<Form.Control
						type="url"
						placeholder="https://source.unsplash.com/example"
						className="my-3"
						value={url}
						onChange={handleUrlChange}
					/>
					<Form.Control
						type="number"
						className="my-3"
						value={price}
						onChange={handlePriceChange}
					/>

					<Button onClick={handleData} className="mx-2 my-3 ">
						Add Shoe
					</Button>
				</Form>
			</Stack>
		</div>
	);
};

export default AddShoes;

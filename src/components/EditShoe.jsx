import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Button,  Stack,Form } from "react-bootstrap";

function EditShoe(props) {
	const { id } = useParams();
	const [data, setData] = useContext(ProductContext);
	const itemId = window.location.href.slice(22);
	const shoe = data.find((item) => item.id === itemId);
	const [url, setUrl] = useState(shoe.image);
	const [name, setName] = useState(shoe.name);
	const [price, setPrice] = useState(shoe.price);

	const handleUrlChange = (e) => {
		setUrl(e.target.value);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handlePriceChange = (e) => {
		setPrice(e.target.value);
	};

	const handleData = () => {
		try {
				const edit = async () => {
					const res = await axios.patch(`http://localhost:3001/shoes/${id}`, {
						image: url,
						name: name,
						price: price,
						review: shoe.review,
						rating: shoe.rashoe
					});
					console.log(res);
				}
				edit();
				setUrl("");
				setName("");
				setPrice(10);
				setData(data.map((shoe) => {
					if (shoe.id === itemId) {
						shoe.id = itemId;
						shoe.image = url;
						shoe.name = name;
						shoe.price = price;
						shoe.review = shoe.review;
						shoe.rating = shoe.rating;
					}
					return shoe;
				}));

			} catch (err) {
				console.log(err);
			}
	}



	return (
		<div>
			<Stack gap={2} className="col-md-5 mx-auto mt-5">
				<Form className="mb-3">
					<label>Edit details</label>
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

					<Button onClick={handleData} className="mx-2 my-3" variant="warning">
						Edit Shoe
					</Button>
				</Form>
			</Stack>
		</div>
	);
	}


export default EditShoe;

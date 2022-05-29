import React,{useState,useContext} from "react";
import { Card } from "react-bootstrap";
import { ProductContext } from "./ProductContext";
export default function Home() {
	const [data, setData] = useContext(ProductContext);
	return (
		<div>
			<Card className="bg-dark text-white border-0 ">
				<img src={`${data[0]&&data[0].image}`} width="500" />
				<Card.ImgOverlay>
					<Card.Title className="display-3 fw-bolder mb-0">
						New Shoes That you dont need
					</Card.Title>
					<Card.Text className="display-6 ">
						Check out our Shoes and waist your $$$$$$$$$$$$
					</Card.Text>
				</Card.ImgOverlay>
			</Card>
		
		</div>
	);
}

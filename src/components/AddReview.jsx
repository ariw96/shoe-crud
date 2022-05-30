import axios from "axios";
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Button,  Form, Stack } from "react-bootstrap";
import { ProductContext } from "./ProductContext";



const AddReview = (props) => {
	const [data, setData] = useContext(ProductContext);
const [review, setReview] = useState("");
const [rating, setRating] = useState(50);
const param = useParams();
const shoe = data.find((shoe) => shoe.id === param.id);

	const handleReviewChange = (e) => {
		setReview(e.target.value);
	};
	const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value));
        
	};

	const handleData = async(e) => {
		e.preventDefault(); 
		setRating(rating);
        //passing the review and rating to the database
       try{
              const res = await axios.patch(`https://nameless-cove-68474.herokuapp.com/shoes/${param.id}`, {
                rating:[rating,...shoe.rating],
                review:[review,...shoe.review]
              });
              console.log(res);
       }
         catch(err){
              console.log(err);
         }
         console.log(shoe.rating);
         //set data to update the state
	setData(data.map((shoe) => {
        if (shoe.id === param.id) {
            shoe.rating = [rating,...shoe.rating];
            shoe.review = [review,...shoe.review];
        }
        return shoe;
    }));
	
	};

	return (
		<div>
			<Stack gap={2} className="col-md-5 mx-auto mt-5">
				<Form className="mb-3">
					<label>Enter details</label>
					<Form.Control
						type="text"
						placeholder="Enter review"
						value={review}
						onChange={handleReviewChange}
					/>
		
					<Form.Control
						type="number"
						className="my-3"
    
						value={rating}
						onChange={handleRatingChange}
					/>
					<Button onClick={handleData} className="mx-2 my-3 ">
						Add Review
					</Button>
				</Form>
			</Stack>
		</div>
	);
};

export default AddReview;
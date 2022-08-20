import React from 'react';
import FormSignup from './FormSignup';
import './Form.css';
import image from '../images/Screenshot_2022-06-22_231952-removebg-preview.png';

const Form = () => {
	return (
		<>
			<div className="form-container">
				<span className="close-btn">X</span>
				<div className="form-content-left">
					<img src={image} alt="left" className="form-img" />
				</div>
				<FormSignup />
			</div>
		</>
	);
};

export default Form;

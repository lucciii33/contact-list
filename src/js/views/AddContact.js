import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const [contact, setContact] = useState({ name: "", address: "", phone: "", email: "" });
	const { store, actions } = useContext(Context);
	const handleChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value });
		console.log(contact);
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							name="name"
							placeholder="Full Name"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>email</label>
						<input
							type="email"
							name="email"
							className="form-control"
							placeholder="Enter email"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							name="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							name="address"
							className="form-control"
							placeholder="Enter address"
							onChange={handleChange}
						/>
					</div>

					<Link className="" to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => actions.addAgenda(contact)}>
							save
						</button>
					</Link>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

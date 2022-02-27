import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false,
		deleteCard: null
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.agenda
							? store.agenda.map((item, index) => {
									return (
										<ContactCard
											onDelete={() => setState({ showModal: true, deleteCard: item.id })}
											key={index}
											agenda={item}
										/>
									);
							  })
							: "loading"}
					</ul>
				</div>
			</div>
			<Modal
				show={state.showModal}
				id={state.deleteCard}
				onClose={() => setState({ showModal: false, deleteCard: null })}
				deleteContact={() => {
					actions.deleteContact(state.deleteCard);
					setState({ showModal: false, deleteCard: null });
				}}
			/>
		</div>
	);
};

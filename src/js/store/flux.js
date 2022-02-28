const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			agenda: [],
			contactId: null
		},
		actions: {
			getData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Angelo_maiele")
					.then(res => res.json())
					.then(dataJson => setStore({ agenda: dataJson }))
					.catch(err => console.log(err));
			},

			addAgenda: contact => {
				console.log(contact);
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "Angelo_maiele",
						full_name: contact.name,
						address: contact.address,
						phone: contact.phone,
						email: contact.email
					})
				})
					.then(res => res.json())
					.then(() => {
						getActions().getData();
					})
					.catch(err => console.log(err));
			},

			deleteAgenda: deleContact => {
				console.log(deleContact);
				fetch(`https://assets.breatheco.de/apis/fake/contact/${deleContact}`, {
					method: "DELETE"
				})
					.then(data => {
						getActions().getData();
						console.log(data.json());
					})
					.catch(err => console.log(err));
			},
			editAgenda: edit => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${getStore().contactId}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "Angelo_maiele",
						full_name: edit.name,
						address: edit.address,
						phone: edit.phone,
						email: edit.email
					})
				})
					.then(data => {
						getActions().getData();
						console.log(data.json());
					})
					.catch(err => console.log(err));
			},
			setId: id => {
				setStore({ contactId: id });
			}
		}
	};
};

export default getState;

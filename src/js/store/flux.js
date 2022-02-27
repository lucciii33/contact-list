const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			agenda: []
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
					});

				//get the store
				//const newCon = getStore().agenda;
				//newCon.push(newContact);

				//reset the global store
				//setStore({ agenda: newCon });
			},

			deleteAgenda: deleContact => {
				console.log(deleContact);
				fetch("https://assets.breatheco.de/apis/fake/contact/", id, {
					method: "DELETE"
				});
			},
			editAgenda: deleContact => {
				console.log(deleContact);
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "Angelo_maiele",
						full_name: contact.name,
						address: contact.address,
						phone: contact.phone,
						email: contact.email
					})
				});
			}
		}
	};
};

export default getState;

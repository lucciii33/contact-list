const getState = ({ getStore, setStore }) => {
	return {
		store: {
			agenda: [],
			contact: []
		},
		actions: {
			getData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Angelo_maiele")
					.then(res => res.json())
					.then(dataJson => setStore({ agenda: dataJson }))
					.catch(err => console.log(err));
			},

			addAgenda: (name, adrress, number, email) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "Angelo_maiele",
						name: name,
						adrress: adrress,
						number: number,
						email: email
					})
				})
					.then(res => res.json())
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Angelo_maiele").then(res =>
							res.json().then(data => {
								setStore({ agenda: data });
							})
						);
					});

				//get the store
				//const newCon = getStore().agenda;
				//newCon.push(newContact);

				//reset the global store
				//setStore({ agenda: newCon });
			}
		}
	};
};

export default getState;

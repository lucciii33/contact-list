const getState = ({ getStore, setStore }) => {
	return {
		store: {
			agenda: [],
			addAgenda: [],
			editAgenda: []
		},
		actions: {
			getData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Angelo_maiele")
					.then(res => res.json())
					.then(dataJson => setStore(dataJson))
					.catch(err => console.log(err));
			},
			onChange: e => {
				const newValue = e.target.value;
				setStore(newValue);
			},
			addCon: newContact => {
				//get the store
				const newCon = getStore().addAgenda;
				newCon.push(newContact);

				//reset the global store
				setStore({ agenda: newCon });
			}
		}
	};
};

export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {

			},
			results: []
		},
		actions: {
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => setStore({ people: data }))
			},
			getPeoples: async function () {
				try {
					const respuesta = await fetch('https://www.swapi.tech/api/people');
					const datos = await respuesta.json();
					setStore({ people: datos })
					return datos;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error; // O manejar el error de otra manera
				}
			}
		}
	}
}

export default getState;

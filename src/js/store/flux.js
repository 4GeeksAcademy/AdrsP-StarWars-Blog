const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {
			},
			person: {
			},
			favorites: [

			]
		},
		actions: {
			getPeople: async function () {
				try {
					const respuesta = await fetch('https://www.swapi.tech/api/people');
					const datos = await respuesta.json();
					setStore({ people: datos })
					return datos;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error; // O manejar el error de otra manera
				}
			},
			getPersonInfo: async function (id) {
				try {
					const respuesta = await fetch('https://www.swapi.tech/api/people/' + id);
					const data = await respuesta.json()
					setStore({ person: data })
					console.log('https://www.swapi.tech/api/people/' + id)
					return data;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error; // O manejar el error de otra manera
				}
			},
			addFavorite: (url) => {
				favorites.push(url)
			},
			deleteFavorite: (i) => {
				favorites.splice(i - 1, 1)
			}
		},
	}
}

export default getState;

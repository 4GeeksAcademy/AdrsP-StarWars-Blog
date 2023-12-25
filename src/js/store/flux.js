const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {
			},
			person: {
			},
			planets:{
			},
			planet:{
			},
			favorites: [
			],
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
					throw error;
				}
			},
			getPlanets: async function () {
				try {
					const respuesta = await fetch('https://www.swapi.tech/api/planets');
					const datos = await respuesta.json();
					setStore({ planets: datos })
					return datos;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error; // O manejar el error de otra manera
				}
			},
			getPlanetInfo: async function (id) {
				try {
					const respuesta = await fetch('https://www.swapi.tech/api/planets/' + id);
					const data = await respuesta.json()
					setStore({ planet: data })
					console.log('https://www.swapi.tech/api/planets/' + id)
					return data;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error;
				}
			},
			addFavorite: (data) => {
				setStore({favorites: data})
			},
			deleteFavorite: (i) => {
				favorites.splice(i - 1, 1)
			}
		},
	}
}

export default getState;

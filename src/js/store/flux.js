import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {
			},
			person: {
			},
			planets: {
			},
			planet: {
			},
			favorites: [
			],
		},
		actions: {
			getPeople: async function () {
				try {
					const respuesta = await fetch('https://swapi.dev/api/people');
					const datos = await respuesta.json();
					console.log(datos.results)
					setStore({ people: datos.results })
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
					return data;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error;
				}
			},
			getPlanets: async function () {
				try {
					const respuesta = await fetch('https://swapi.dev/api/planets/');
					const datos = await respuesta.json();
					setStore({ planets: datos.results })
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
					return data;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error;
				}
			},
			addFavorite: (data) => {
				const store = getStore()
				if (store.favorites.includes(data)) {
					// Lo borra
					let AuxArray = []
					AuxArray = store.favorites.filter((elem) => elem !== data)
					setStore({ favorites: AuxArray })
				}
				else {
					setStore({ favorites: [...store.favorites, data] }) //esto concatena la data nueva, con la data almacenada en el store
				}
			},
		},
	}
}

export default getState;

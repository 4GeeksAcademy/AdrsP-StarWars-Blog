import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext";


import { StarWarNavbar } from "./component/StarWarNavbar.jsx"
import { DetailedView } from "./views/DetailedView.jsx";
import { HomeView } from "./views/HomeView.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<StarWarNavbar />
				<Routes>
					<Route path="/" element={<HomeView />} />
					<Route path="/detailedView" element={<DetailedView />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='character/:id' element={<Details />} />
		</Routes>
	);
}

export default App;

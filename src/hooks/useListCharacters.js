import React, { useEffect, useState } from "react";

const useListCharacters = () => {
	const ENDPOINT = "https://www.breakingbadapi.com/api/characters";

	const [characterData, setCharacterData] = useState([]);
	useEffect(() => {
		fetch(ENDPOINT)
			.then((res) => res.json())
			.then((data) => {
				setCharacterData(data);
			});
	}, []);

	return [characterData];
};

export default useListCharacters;

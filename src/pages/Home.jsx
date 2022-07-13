import React from "react";

import Character from "../components/Character";
import { styled } from "@stitches/react";
import useListCharacters from "../hooks/useListCharacters";

const CardWrapper = styled("div", {
	display: "grid",
	gridTemplateColumns: "repeat(3,minmax(400px,1fr))",
	placeItems: "center",
});
const Home = () => {
	const [allCharacters] = useListCharacters();

	return (
		<CardWrapper>
			{allCharacters.map((character) => (
				<Character key={character.char_id} character={character} />
			))}
		</CardWrapper>
	);
};

export default Home;

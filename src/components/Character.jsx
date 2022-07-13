import React from "react";
import { styled } from "@stitches/react";
import { useNavigate } from "react-router-dom";

const Card = styled("div", {
	backgroundColor: "gainsboro",
	padding: "32px",
	width: "300px",
	margin: "10px",
});
const Image = styled("img", {
	width: "250px",
	height: "250px",
	objectFit: "cover",
});

const Character = ({ character }) => {
	let navigate = useNavigate();

	const handleCardClick = () => {
		navigate(`character/${character.char_id}`, { replace: true });
	};
	return (
		<>
			<Card onClick={handleCardClick}>
				<h3>{character.name}</h3>
				<h5>{character.birthday}</h5>
				<Image src={character.img} alt='' />
				{/* <Image></Image> */}
			</Card>
		</>
	);
};

export default Character;

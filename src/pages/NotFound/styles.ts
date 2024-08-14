import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	text-align: center;
	color: #343a40;
`;

export const Message = styled.h1`
	font-size: 3rem;
	margin-bottom: 1rem;
`;

export const HomeLink = styled.a`
	font-size: 1.5rem;
	color: #007bff;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;



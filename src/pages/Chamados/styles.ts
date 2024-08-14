import styled from "styled-components";

import calls from "../../assets/CTA.png";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	.formulario {
		background: ${({ theme }) => theme.COLORS.BLUE_DARK};
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		padding: 30px;
	}
	h2 {
		margin-left: 200px;
	}

	.button {
		width: 100px;

		background: transparent;
		border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

		align-items: center;
		justify-content: end;
		margin-left: 700px;
		border-radius: 10px;

		&:hover {
			background: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
			border: 1px solid transparent;
		}
	}
`;

export const Cta = styled.div`
	width: 1200px;
	height: 100vh;
	background: url(${calls}) no-repeat center center;
	background-size: auto;
`;

export const Form = styled.form`
	padding: 10px 80px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	max-width: 600px;
	align-items: center;
	margin-left: 200px;

	input {
		padding: 15px;
		height: 60px;
	}

	.inputs {
		width: 100%;
		margin-top: 8px;

		label {
			font-size: 1rem;
			margin-top: 10px;
		}
		:focus {
			border: 2px solid #007bff;
			box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
			border-radius: 10px;
		}
	}
`;
export const SelectItems = styled.select`
	width: 100%;
	height: 70px;
	padding: 15px;

	font-size: 1.2rem;
	border: none;
	border-radius: 10px;
	margin-bottom: 10px;
	color: #fff;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

	option {
		color: #fff;
		background-color: transparent;
		border: none;
		outline: none;
		color: inherit;
		padding: 0;
		text-decoration: none;
		font-size: 1.2rem;
	}
`;
export const StyledButton = styled.button`
	display: flex;
	align-items: flex-start;
	margin-right: 350px;
	gap: 8px; /* Espaçamento entre o ícone e o texto */
	padding: 8px 16px;
	background-color: transparent;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	margin-bottom: 10px;

	&:hover {
		background-color: #0056b3;
	}
`;

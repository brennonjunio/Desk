import styled from "styled-components";

export const Container = styled.button`
	width: 100%;
	background-color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
	color: ${({ theme }) => theme.COLORS.WHITE};

	height: 3.4rem;
	font-size: 18px;
	border: 0;
	cursor: pointer;
	padding: 0;
	margin-top: 1rem;
	border-radius: 0.625rem;
	font-weight: 500;

	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${({ theme }) => theme.COLORS.BLUE};
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

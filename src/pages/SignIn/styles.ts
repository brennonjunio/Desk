import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
`;

export const Form = styled.form`
	padding: 30px 90px;
	background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

	border-radius: 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	text-align: center;
	gap: 10px;

	> h1 {
		font-size: 48px;
		color: ${({ theme }) => theme.COLORS.PURPLE};
		margin-bottom: 20px;
	}

	> h2 {
		font-size: 24px;
		margin: 40px 0;
	}

	> p {
		font-size: 14px;
		color: ${({ theme }) => theme.COLORS.GRAY_100};
	}
`;
export const ButtonLink = styled(Link)`
	color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
	margin-top: 10px;
`;

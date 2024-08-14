import styled from "styled-components";

export const Container = styled.section`
	margin: 28px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> h2 {
		text-align: center;
		font-weight: bold;

		margin-bottom: 24px;

		color: ${({ theme }) => theme.COLORS.WHITE};
		font-size: 32px;
		font-weight: 400;
	}
`;

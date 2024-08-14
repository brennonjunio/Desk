import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;

	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
	}

	.button {
		background: ${({ theme }) => theme.COLORS.BLUE_DARK};
		width: 383px;
		height: 89px;
		border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};

		font-size: 24px;

		@media (max-width: 1125px) {
			width: 200px;
			height: 60px;
			font-size: 16px;
		}
		@media (max-width: 462px) {
			width: 150px;
			height: 45px;
			font-size: 12px;
		}
	}
`;

export const Brand = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> h1 {
		font-size: 48px;
		max-width: 800px;

		text-align: center;
		background: linear-gradient(180deg, #f33cc0, #4349ff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		@media (max-width: 1125px) {
			font-size: 32px;
			max-width: 500px;
			margin-top: 30px;
		}
		@media (max-width: 462px) {
			font-size: 24px;
			max-width: 300px;
			margin-top: 24px;
		}
	}
	> img {
		width: 525px;
		height: 462px;
		margin-top: 45px;

		@media (max-width: 1125px) {
			width: 425px;
			height: 362px;
		}
		@media (max-width: 462px) {
			width: 325px;
			height: 282px;
		}
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 48px;
`;

import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
	width: 100vw;
	height: 70px;
	background-color: #fefefe;
	display: flex;
	align-items: center;
	padding: 0 20px;
	color: white;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
`;

export const HeaderLink = styled(Link)`
	display: flex;
	height: 70px;
	width: 200px;
	justify-content: center;
	align-items: center;
	color: #2d2d34;
	box-sizing: border-box;
	font-family: Inter, sans-serif;
	text-decoration: none;
	font-size: 22px;
	font-weight: 600;

	@media (max-width: 510px) {
		width: 100vw;
	}
`;

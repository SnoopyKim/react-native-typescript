import React from 'react';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components';
import Theme from './Theme';

interface StyledProps {
	theme: ITheme;
}

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${(props: StyledProps) =>
		props.theme && props.theme.color.black};
`;
const MainText = styled.Text`
	font-size: 20;
	text-align: center;
	margin: 10px;
	color: red;
`;

interface Props {}
const App = ({  }: Props) => {
	return (
		<ThemeProvider theme={Theme}>
			<Container>
				<MainText>Hello world</MainText>
			</Container>
		</ThemeProvider>
	);
};

export default App;

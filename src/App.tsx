import React from 'react';
import { Root } from 'native-base';
import Navigator from './Screen/Navigator';

interface Props {}

const App = ({  }: Props) => {
	return (
		<Root>
			<Navigator />
		</Root>
	);
};

export default App;

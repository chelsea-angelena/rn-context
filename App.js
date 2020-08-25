import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './src/Navigation/Nav';
import { Provider } from './src/Context/BlogContext';
import { ThemeProvider } from 'react-native-elements';
import colors from './colors';
// import { theme } from './Theme';

// const theme = {
// 	Button: {
// 		titleStyle: {
// 			color: 'red'
// 		},
// 	},
// }
const theme = {
	Button: {
		colors: {
			backgroundColor: 'red',
		},
	},
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<Nav />
			</NavigationContainer>
		</ThemeProvider>
	);
};

export default () => {
	return (
		<Provider>
			<App />
		</Provider>
	);
};

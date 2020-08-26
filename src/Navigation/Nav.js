import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../Screens/IndexScreen';
import EditScreen from '../Screens/EditScreen';
import CreateScreen from '../Screens/CreateScreen';
import ShowScreen from '../Screens/ShowScreen';
import { navigationRef } from '../../RootNavigation';

const Stack = createStackNavigator();

export default function Nav(props, { navigation }) {
	console.log(props, 'stacknav props');
	return (
		<Stack.Navigator
			initialRouteName='Index'
			defaultNavigationOptions={{
				title: 'blog',
			}}
		>
			<Stack.Screen
				name='Index'
				component={IndexScreen}
				options={({ navigation, route }) => ({
					headerRight: () => (
						<TouchableOpacity
							onPress={() => navigation.navigate('CreateScreen')}
						>
							<Feather name='plus' size={30} />
						</TouchableOpacity>
					),
				})}
			/>
			<Stack.Screen name='ShowScreen' component={ShowScreen} />
			<Stack.Screen name='CreateScreen' component={CreateScreen} />
			<Stack.Screen name='EditScreen' component={EditScreen} />
		</Stack.Navigator>
	);
}

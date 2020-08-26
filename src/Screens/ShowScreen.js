import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Context } from '../Context/BlogContext.js';
import { navigationRef } from '../../RootNavigation';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ShowScreen(props) {
	const navigation = useNavigation();
	const { state } = useContext(Context);
	// React.useLayoutEffect(() => {
	// 	navigation.setOptions({});
	// });

	const id = props.route.params.id;
	console.log(id);
	const blogPost = state.find((blogPost) => blogPost.id === id);
	return (
		<View style={StyleSheet.container}>
			<Text h4 style={styles.title}>
				{blogPost.title}
			</Text>
			<Text  style={styles.content}>{blogPost.content}</Text>
			<TouchableOpacity
				navigation={props.navigation}
				onPress={() => navigation.navigate('EditScreen', { id: id })}
			>
				<AntDesign name='edit' size={24} color='black' />
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		fontSize: 22,
		alignSelf: 'center',
		marginTop: 20,
	},
	text: {
		alignSelf: 'center',
		marginLeft: 48,
		textAlign: 'left',
	},
});

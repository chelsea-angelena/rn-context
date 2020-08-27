import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Text, Header, Divider } from 'react-native-elements';
import { Context } from '../Context/BlogContext.js';
import { navigationRef } from '../../RootNavigation';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../colors';
import { Feather } from '@expo/vector-icons';

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
		<View style={styles.container}>
			<Header
				statusBarProps={{ barStyle: 'light-content' }}
				barStyle='light-content' // or directly
				centerComponent={{
					text: blogPost.title,
					style: { color: 'black', fontSize: 24 },
				}}
				containerStyle={{
					backgroundColor: colors.lightest,
					justifyContent: 'space-around',
				}}
				rightComponent={
					<TouchableOpacity
						style={styles.icon}
						navigation={props.navigation}
						onPress={() =>
							navigation.navigate('EditScreen', { id: id })
						}
					>
						<Feather
							name='edit-3'
							size={32}
							color='black'
							style={{ marginRight: 24 }}
						/>
					</TouchableOpacity>
				}
			/>
			<Divider style={{ marginTop: 15, backgroundColor: 'blue' }} />

			{/* <Text h4 style={styles.title}>
					{blogPost.title}
				</Text> */}
			{/* <TouchableOpacity
					style={styles.icon}
					navigation={props.navigation}
					onPress={() =>
						navigation.navigate('EditScreen', { id: id })
					}
				>
					<AntDesign name='edit' size={24} color='black' />
				</TouchableOpacity> */}

			<Text style={styles.content}>{blogPost.content}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: colors.lightest,
	},
	row: {
		flexDirection: 'row',
	},
	title: {
		fontSize: 22,
		alignSelf: 'center',
		marginTop: 20,
		flexDirection: 'row',
		// fontFamily: 'HelveticaNeue-Bold'
		fontFamily: 'Baskerville-Bold',
	},
	content: {
		alignSelf: 'center',
		marginLeft: 32,
		marginRight: 32,
		lineHeight: 20,
		fontSize: 14,
		textAlign: 'left',
		fontFamily: 'Helvetica Neue',
	},
	icon: {
		flexDirection: 'row',
	},
});

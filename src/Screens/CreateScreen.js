import React, { useContext, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../Context/BlogContext.js';
import colors from '../../colors';
import BlogPostForm from '../Components/BlogPostForm';

export default function CreateScreen(props, { IndexScreen }) {
	const navigation = useNavigation();
	const { addBlogPost } = useContext(Context);
	console.log(props.navigation);
	const id = props.route.name;
	console.log(id);
	return (
		<View>
			<BlogPostForm
				navigation={props.navigation}
				onSubmit={(title, content) =>
					addBlogPost(title, content, () =>
						navigation.navigate('Index')
					)
				}
			/>
		</View>
		// {/* // <Button
		// // 	title='Save Post'
		// //     onPress={() }/>
		// 	// navigation={props.navigation}
		// 	// onPress={() =>
		// 	//     addBlogPost(title, content, () =>
		// 	//         navigation.navigate('Index') */}
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		// height: '100%',
// 		// width: '100%',
// 		flex: 1,
// 		backgroundColor: 'white',
// 	},

// });

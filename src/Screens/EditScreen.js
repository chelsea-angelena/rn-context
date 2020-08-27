import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context } from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';
import { useNavigation } from '@react-navigation/native';

export default function EditScreen(props) {
	console.log(props.navigation, 'edit props');
	const navigation = useNavigation();
	const { state, editBlogPost } = useContext(Context);
	const id = props.route.params.id;
	console.log(id);
	const blogPost = state.find((blogPost) => blogPost.id === id);
	return (
		<View>
			<BlogPostForm
				navigation={props.navigation}
				initialValue={{
					title: blogPost.title,
					content: blogPost.content,
				}}
				onSubmit={(title, content) => {
					editBlogPost(id, title, content, () =>
						navigation.navigate('Index')
					);
				}}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

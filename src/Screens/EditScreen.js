import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context } from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

export default function EditScreen(props) {
	const { state } = useContext(Context);
	const id = props.route.params.id;
	console.log(id);
	const blogPost = state.find((blogPost) => blogPost.id === id);
	return (
		<View>
			<BlogPostForm
				initialValue={{
					title: blogPost.title,
					content: blogPost.content,
				}}
				onSubmit={(title, content) => {
					console.log(title, content);
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

import React, { useState } from 'react';
import { View, Alert, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import colors from '../../colors';

export default function BlogPostForm(props) {
	let initialValue = props.initialValue;
	const [title, setTitle] = useState(initialValue.title);
	const [content, setContent] = useState(initialValue.content);
	console.log(props);
	let onSubmit = props.onSubmit;

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Enter Title: </Text>
			<TextInput
				style={styles.inputTitle}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput
				style={styles.inputContent}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<Button
				title='Save Post'
				onPress={() => onSubmit(title, content)}
				titleStyle={{
					fontFamily: 'HelveticaNeue-Bold',
					fontSize: 18,
				}}
				raised={true}
				type='solid'
				buttonStyle={{
					height: 48,
					borderRadius: 8,
					margin: 20,
					backgroundColor: 'hsl(350, 30%, 34%)',
				}}
				// navigation={props.navigation}
				// onPress={() => onSubmit(title, content)}
				// 	addBlogPost(title, content, () =>
				// 		navigation.navigate('Index')
				// 	)
				// }
			/>
		</View>
	);
}

BlogPostForm.defaultProps = {
	initialValue: {
		title: '',
		content: '',
	},
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputTitle: {
		fontSize: 18,
		backgroundColor: colors.lighter,
		height: 48,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: colors.medGrey,
		width: '90%',
		marginTop: 15,
		marginBottom: 15,
		paddingLeft: 24,
		alignSelf: 'center',
	},
	inputContent: {
		fontSize: 18,
		backgroundColor: colors.lighter,
		height: 48,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: colors.medGrey,
		width: '90%',
		marginTop: 15,
		marginBottom: 15,
		paddingLeft: 24,
		alignSelf: 'center',
		height: 400

	},
	label: {
		fontSize: 18,
		marginTop: 15,
		marginLeft: 24,
		fontFamily: 'Helvetica',
		fontSize: 20,
		color: 'black'
	},
});

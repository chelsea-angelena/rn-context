import React from 'react';
import { Button } from 'react-native-elements';

<Button
	titleStyle={{
		fontFamily: 'HelveticaNeue-Bold',
		fontSize: 18,
	}}
	raised={true}
	type='solid'
	buttonStyle={{
		height: 48,
		borderRadius: 24,
		margin: 20,
		backgroundColor: 'hsl(350, 30%, 34%)',
	}}
	title='Add Post'
	onPress={addBlogPost}
/>
const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.charcoalDark,
	},
});

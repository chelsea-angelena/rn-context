import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native';
import { Context } from '../Context/BlogContext';
// import { FontAwesome } from '@expo/vector-icons';
import {
	Icon,
	ListItem,
	ThemeProvider,
	Text,
	Button,
	Divider,
} from 'react-native-elements';
import colors from '../../colors';
const theme = {
	Button: {
		colors: 'red',
		backgroundColor: 'red',
	},
};

export default function IndexScreen() {
	const { state, addBlogPost } = useContext(Context);

	return (
		<ThemeProvider theme={theme}>
			<View>
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

				<FlatList
					data={state}
					keyExtractor={(blogPost) => blogPost.title}
					renderItem={({ item }) => {
						return (
							<ListItem
								style={{ height: 116 }}
								title={item.title}
								titleStyle={{
									fontFamily: 'HelveticaNeue-Medium',
									marginLeft: 32,
								}}
								rightIcon={{
									name: 'trash-o',
									color: 'black',
									type: 'font-awesome',
								}}
								bottomDivider
								chevron
							/>
						);
					}}
				/>
				{/* // <View styles={styles.view}>
						// 	<Text style={styles.title}>{item.title}</Text>
						// 	<Text style={styles.icontext}><FontAwesome name='trash-o' style={styles.icon}/></Text>
						// </View> */}
				{/* );
				}}
			/> */}
			</View>
		</ThemeProvider>
	);
}
const styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	view: {
		paddingRight: 20,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: 'grey',
	},
	title: {
		fontSize: 18,
		paddingRight: 40,
	},
	icon: {
		fontSize: 24,
		color: 'black',
	},
	iconText: {
		marginLeft: 40,
		alignSelf: 'flex-end',
	},
	button: {
		backgroundColor: colors.charcoalDark,
	},
});

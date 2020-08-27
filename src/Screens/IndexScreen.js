import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { Context } from '../Context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';
import {
	Icon,
	ListItem,
	ThemeProvider,
	Text,
	List,
	Button,
	Divider,
} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import colors from '../../colors';
import { useIsFocused } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

const theme = {
	Button: {
		colors: 'red',
		backgroundColor: 'red',
	},
};

export default function IndexScreen(props) {
	console.log(props.navigation);
	const navigation = useNavigation();
	const { state, getBlogPosts, deleteBlogPost } = useContext(Context);

	useEffect(() => {
		getBlogPosts();
	}, []);

	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return (
						<View>
							<View style={styles.row}>
								<TouchableOpacity
									onPress={() =>
										navigation.navigate('ShowScreen', {
											id: item.id,
										})
									}
								>
									<Text style={styles.title}>
										{item.title}
									</Text>
								</TouchableOpacity>

								<TouchableOpacity
									onPress={() => deleteBlogPost(item.id)}
								>
									<Text>
										<FontAwesome name='trash-o' size={24} />
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 20,
		borderColor: 'black',
		borderBottomWidth: 0.5,
		paddingBottom: 30,
		paddingTop: 0,
		alignItems: 'center',
		paddingRight: 20,
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
});

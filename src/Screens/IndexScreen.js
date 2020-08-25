import 'react-native-gesture-handler'
import React, {useContext} from 'react'
import {Button, FlatList, StyleSheet, View, Text } from 'react-native'
import {Context} from '../Context/BlogContext'

export default function IndexScreen() {
    const {state, addBlogPost } = useContext(Context)

return (
        <View style={styles.container}>
            <Button title='Add Post' onPress={addBlogPost}/>
            <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({item}) => {
                    return(
                    <Text>{item.title}</Text>
                    )}}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

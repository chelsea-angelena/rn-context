import 'react-native-gesture-handler'
import React, {useContext} from 'react'
import {FlatList, StyleSheet, View, Text } from 'react-native'
import {BlogContext} from '../Context/BlogContext'

export default function IndexScreen() {
const blogPosts = useContext(BlogContext)
console.log(blogPosts)
return (
        <View style={styles.container}>
            <FlatList
            data={blogPosts}
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

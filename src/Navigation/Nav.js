import 'react-native-gesture-handler'
import * as React from 'react'
import { View, Text } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import IndexScreen from '../Screens/IndexScreen';
import EditScreen from '../Screens/EditScreen'
import CreateScreen from '../Screens/CreateScreen'
import ShowScreen from '../Screens/ShowScreen'

const Stack = createStackNavigator()

export default function Nav(props, {navigation}){
    console.log(props, "stacknav props")
    return(
       <Stack.Navigator initialRouteName="Index"
       defaultNavigationOptions={{
           title: "blog"
       }}>
           <Stack.Screen
           name="Index"
           component={IndexScreen}
           />
       </Stack.Navigator>

       )
}

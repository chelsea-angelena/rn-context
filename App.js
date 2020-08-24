import 'react-native-gesture-handler'
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Nav from './src/Navigation/Nav'
import {BlogProvider} from './src/Context/BlogContext'

const App = () => {
return(
<NavigationContainer>
<Nav/>
</NavigationContainer>
  );
}

export default () => {
  return(
    <BlogProvider>
    <App/>
    </BlogProvider>
  )
}
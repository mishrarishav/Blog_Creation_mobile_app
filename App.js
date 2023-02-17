import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BlogList from './src/components/BlogList';
import BlogDetail from './src/components/BlogDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BlogList" component={BlogList} />
        <Stack.Screen name="BlogDetail" component={BlogDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

//use the navigation prop to navigate between screens in our app

const handleBlogPress = (id) => {
    navigation.navigate('BlogDetail', { id });
  };


//navigate back to the BlogList screen:

  const handleBackPress = () => {
    navigation.goBack();
  };
  
  

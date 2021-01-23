import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealScreen Screen</Text>
      <Button title="See Details!" onPress={() => {
        props.navigation.navigate({routeName: 'MealDetail'})  // routeName has to be defined in MealsNavigator.js
      }}></Button>
      <Button title="Go Back" onPress={() => {
        props.navigation.goBack();  // can use *.pop() as well. Difference is goBack is specific to stackNavigator. pop is used in other navigators as well.
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealScreen;
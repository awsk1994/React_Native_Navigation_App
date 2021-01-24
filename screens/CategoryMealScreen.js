import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id == catId);

  return (
    <View style={styles.screen}>
      <Text>The CategoryMealScreen Screen</Text>
      <Text>{selectedCategory.title}</Text>
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
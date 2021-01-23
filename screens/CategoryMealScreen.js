import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealScreen Screen</Text>
      <Button title="Go to Meals!" onPress={() => {
        props.navigation.navigate({routeName: 'MealDetail'})  // routeName has to be defined in MealsNavigator.js
      }}></Button>
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
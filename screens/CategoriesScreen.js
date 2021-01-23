import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button title="Go to Meals!" onPress={() => {
        props.navigation.navigate({routeName: 'CategoryMeal'})  // routeName has to be defined in MealsNavigator.js
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

export default CategoriesScreen;
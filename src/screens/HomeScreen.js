import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {

  const navigateToScreen = (screen) => {
    navigation.navigate(screen)
  }

  const createButton = (screen) => {
    const title = `Go to ${screen} Demo`;

    return (<Button 
      onPress={(e) => navigateToScreen(screen)}
      title={title}
    />);
  }

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      {createButton('Components')}
      {createButton('List')}
      {createButton('Image')}
      {createButton('Counter')}
      {createButton('Color')}
      {createButton('Square')}
      {createButton('Text')}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

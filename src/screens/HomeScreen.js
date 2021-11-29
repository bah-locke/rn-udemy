import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  const navigateToScreen = (screen) => {
    navigation.navigate(screen)
  }

  const createButton = (screen, title) => {
    return (<Button 
      onPress={(e) => navigateToScreen(screen)}
      title={title}
    />);
  }

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      {createButton('Components', 'Go to Components Demo')}
      {createButton('List', 'Go to List Demo')}
      {createButton('Image', 'Go to Image Demo')}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

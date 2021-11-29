import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToScreen = (screen) => {
    navigation.navigate(screen)
  }

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
        onPress={(e) => navigateToScreen('Components')}
        title="Go to Components Demo" 
      />
      <Button 
        onPress={(e) => navigateToScreen('List')}
        title="Go to List Demo" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

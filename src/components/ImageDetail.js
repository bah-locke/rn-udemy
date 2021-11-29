import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    return (
        <View style={styles.textStyle}>
            <Image source={props.pathToImage} />
            <Text>Image Detail Name: {props.title}</Text>
            <Text>Score: {props.score}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 1,
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 10,
        paddingVertical: 50,
        width: '100%',
    }
});

export default ImageDetail;
import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = props => {
    const titleColor = props.color.charAt(0).toUpperCase() + props.color.slice(1);

    const handleColorIncrease = () => {
        props.onIncrease(props.color)
    }

    const handleColorDecrease = () => {
        props.onDecrease(props.color)
    }

    return (
        <View>
            <Text>{titleColor}</Text>
            <Button title={`Increase ${titleColor}`} onPress={e=>handleColorIncrease()}/> 
            <Button title={`Decrease ${titleColor}`} onPress={e=>handleColorDecrease()} /> 
        </View>
    )
}

const styles = StyleSheet.create({})

export default ColorCounter
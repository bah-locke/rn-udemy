import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_CHANGE = 50;

const reducer = (state, action) => {
    const typeName = action.type.split('_')[1]
    const counter = state[typeName] + action.payload
    return {...state, [typeName]: (counter < 255 ? counter < 0 ? 0 : counter : 255)}
}

const SquareScreen = () => {
    // const [colorCounter, setColorCounter] = useState({
    //     'red': 0,
    //     'green': 0,
    //     'blue': 0
    // });
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

    // const changeColor = (color, change) => {
    //     const counter = colorCounter[color] + change
    //     colorCounter[color] = counter < 255 ? counter < 0 ? 0 : counter : 255
    //     setColorCounter({...colorCounter}, console.log(colorCounter))
    // }

    return (
        <View>
            <ColorCounter color="red" onIncrease={color=>dispatch({type: `change_${color}`, payload: COLOR_CHANGE})} onDecrease={color=>dispatch({type: `change_${color}`, payload: -COLOR_CHANGE})} />
            <ColorCounter color="green" onIncrease={color=>dispatch({type: `change_${color}`, payload: COLOR_CHANGE})} onDecrease={color=>dispatch({type: `change_${color}`, payload: -COLOR_CHANGE})} />
            <ColorCounter color="blue" onIncrease={color=>dispatch({type: `change_${color}`, payload: COLOR_CHANGE})} onDecrease={color=>dispatch({type: `change_${color}`, payload: -COLOR_CHANGE})} />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen
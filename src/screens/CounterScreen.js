import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    console.log(`${action.type}ing`)
    switch (action.type) {
        case 'increment':
            return {...state, count: (state.count + action.payload)};
        case 'decrement':
            return {...state, count: (state.count - action.payload)};
        default:
            return state;
    }
};

const CounterScreen = () => {
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <View>
            <Button title="Increase" onPress={(e) => dispatch({type: 'increment', payload: 1})}/>
            <Button title="Decrease" onPress={(e) => dispatch({type: 'decrement', payload: 1})} />
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
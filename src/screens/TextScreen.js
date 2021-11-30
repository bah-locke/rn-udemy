import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
    const [password, setPassword] = useState('')

    return (
        <View>
            <Text>Enter password:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                secureTextEntry={true}
                onChangeText={newValue=>{setPassword(newValue)}}
            />
            {/*<Text>Your name is: {password.split('').map((x=>'*'))}</Text>*/}
            {password.length < 7 ? <Text>Password must be at least 7 characters!</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen
import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: '125'},
        { name: 'Friend #2', age: '110'},
        { name: 'Friend #3', age: '100'},
        { name: 'Friend #4', age: '120'},
        { name: 'Friend #5', age: '90'},
        { name: 'Friend #6', age: '102'},
        { name: 'Friend #7', age: '92'},
    ];
    
    return (
        <FlatList 
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.name}
            data={friends} 
            renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 10,
        width: 200
    }
});

export default ListScreen;
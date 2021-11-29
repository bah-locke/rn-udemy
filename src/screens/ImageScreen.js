import React from "react";
import { StyleSheet, FlatList } from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    const images = [
        { title: 'Beach Livin\'', path: require('../../assets/beach.jpg'), score: 90},
        { title: 'Forest Hikin\'', path: require('../../assets/forest.jpg'), score: 100},
        { title: 'Mountain Climbin\'', path: require('../../assets/mountain.jpg'), score: 90},
    ];

    return (
        <FlatList 
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.name}
            data={images} 
            renderItem={({item}) => {
            return <ImageDetail title={item.title} pathToImage={item.path} score={item.score}></ImageDetail>
        }}/>
    )
};

export default ImageScreen;



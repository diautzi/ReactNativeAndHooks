import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TextScreen from './TextScreen';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle} >Child #1</Text>
            <Text style={styles.textStyle} >Child #2</Text>
            <Text style={styles.textStyle} >Child #3</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    viewStyle: {
        borderWidth  : 3,
        borderColor  : "black",
        flexDirection: "row",
        height       : 200,
        alignItems   :"flex-end"
    },
    textStyle: {
        borderWidth  : 3,
        borderColor  : "red",
    }

});


export default BoxScreen;
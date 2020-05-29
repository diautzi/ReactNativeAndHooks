import React from "react";
import { Text, StyleSheet, View } from "react-native";

const GreetingsScreen = () => {
    const name =  "Diana"
    return (
    <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        <Text style ={styles.subHeaderStyle}>Hi, my name is {name} </Text>
    </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default GreetingsScreen;
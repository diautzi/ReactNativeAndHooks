import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';


const TextScreen = () => {
    const [name, setName] = useState("")

    return (
        <View>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                // always when you get user input
                value={name}
                onChangeText={ newVal => setName(newVal)}
            /> 
            <Text>My name is {name}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    }
})


export default TextScreen;
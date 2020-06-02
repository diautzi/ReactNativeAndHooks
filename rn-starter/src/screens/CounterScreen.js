import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScren = () => {
    const [counter, setCounter] = useState(0);

    return <View>
        <Button 
            title="Increase" 
             onPress={() => {
                // Don't!!
                // counter ++;
                // console.log(counter)
                // counter+1
                setCounter(counter + 1);
        }}
            />
        <Button 
            title="Decrease"
            onPress={() => {
                // Don't!!
                // counter--;
                // console.log(counter)
                setCounter(counter - 1);
              }}
            />
        <Text>Current Count: { counter } </Text>
    </View>
}

const styles = StyleSheet.create({

});

export default CounterScren;
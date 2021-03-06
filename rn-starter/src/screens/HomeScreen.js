import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
    <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Button 
          onPress={() => navigation.navigate("ComponentsScreen")}
          title="Go to Components Demo" 
        />
        <Button 
          title="Go to List Screen"
          onPress={()=> navigation.navigate("ListScreen")}
        /> 
         <Button 
          title="Go to Image Screen"
          onPress={()=> navigation.navigate("ImageScreen")}
        /> 
          <Button 
          title="Go to Counter Screen"
          onPress={()=> navigation.navigate("Counter")}
        /> 
        <Button 
          title="Go to Color Screen"
          onPress={()=> navigation.navigate("ColorScreen")}
        /> 
         <Button 
          title="Go to Square Screen"
          onPress={()=> navigation.navigate("SquareScreen")}
        /> 
         <Button 
          title="Go to Text Screen"
          onPress={()=> navigation.navigate("TextScreen")}
        /> 
          <Button 
          title="Go to Box Screen"
          onPress={()=> navigation.navigate("BoxScreen")}
        /> 
        {/* <TouchableOpacity x
          onPress={()=> props.navigation.navigate("ListScreen")}>
          <Text>Go to List Demo</Text>
          <Text>Go to List Demo</Text>
          <Text>Go to List Demo</Text>
        </TouchableOpacity> */}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

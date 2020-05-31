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

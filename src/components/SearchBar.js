import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({
    term, 
    onTermChange, 
    onTermSubmit
}) => {
    return (
        <View style={styles.backgroundStyle}> 
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                style={styles.inputStyle}
                value={term}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        flexDirection:'row',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 10,
        marginTop: 10,
    },
    inputStyle: {
        borderColor: "black",
        fontSize : 18, 
        flex: 1
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 35,
        marginHorizontal: 15,
    }
});

export default SearchBar;
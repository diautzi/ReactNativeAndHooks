import React,{ useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Image, View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp/'

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null)

    const getResult = async (id) => {
       const response = await yelp.get(`/${id}`);
       setResult(response.data);
    };
    useEffect(() => {
        getResult(id)
    }, []);

    if( !result) {
        return null;
    }
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => 
                    <Image 
                        style={styles.image}
                        source={{ uri: item}}
                    />}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
      alignItems: 'center',
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    image : {
        alignSelf: 'center',
        height: 210,
        width: 300
    }
});

export default ResultsShowScreen;
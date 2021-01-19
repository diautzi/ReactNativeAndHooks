import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ 
  title, 
  results, 
  navigation 
}) => {
  if (!results.length) {
    return null;
  };
  console.log(results)
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          data={results}
          horizontal
          keyExtractor={(result) => result.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return(
              <TouchableOpacity 
                onPress={() => navigation.navigate('ResultsShow', { id: item.id})}
              >
                <ResultsDetail result={item} />
              </TouchableOpacity>
            )
          }
          }
         />
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
      marginBottom: 10
    },
    title : {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 15,
    }
});

export default withNavigation(ResultsList);
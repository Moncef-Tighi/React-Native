import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import ItemList from './components/ItemList';
import React from 'react';
import AddMovie from './components/addMovie';
import MovieList from './components/Movie.list';
import listeMovie from './data/data';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
          <AddMovie/>
      </View>
      <View style={styles.section}>
        <Button style={styles.button}>Afficher les films</Button>
      </View>
      <View style={styles.section}>
          <MovieList movies={listeMovie}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "dimgray",
    // justifyContent: "center",
    // alignItems: "center"
  },
  section: {
    flex: 1,
    margin: 5,
    textAlign: "center",
    backgroundColor: "white",
    padding: 2,
  },
  
  button: {
    cursor: "pointer",
    backgroundColor: "darkslateblue",
    borderWidth: 1,
    borderStyle: "solid",
    color: "white",
    padding: 0.75,
    width: 50
  }
});


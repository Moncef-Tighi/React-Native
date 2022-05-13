import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import ItemList from './components/ItemList';
import React, { useState } from 'react';
import AddMovie from './components/addMovie';
import MovieList from './components/Movie.list';
import listeMovie from './data/data';

export default function App() {
  const [liste, setListe] = useState(listeMovie);

  const search = function(event, titre) {
    console.log(titre);
    const newListe = listeMovie.filter(movie => movie.title.includes(titre))
    setListe(newListe)
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
          <AddMovie search={search}/>
      </View>
      <View style={styles.section}>
        <Button style={styles.button}>Afficher les films</Button>
      </View>
      <View style={styles.section}>
          <MovieList movies={liste}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "block",
    padding: 15,
    backgroundColor: "dimgray",
    // justifyContent: "center",
    // alignItems: "center"
  },
  section: {
    flex: 1,
    margin: 5,
    padding: 5,
    width : 600,
    alignSelf : "center",
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


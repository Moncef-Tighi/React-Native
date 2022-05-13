import React from 'react';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import Movie from './Movie.js';
import { View, Text, Image } from 'react-native';

const movie = ({item}) =>{
    return (
        <Movie key={item.key}
        id={item.key}
        title={item.title}
        releaseDate={item.releaseDate}
        description={item.description}
        image={item.image}/>
    )
}   
const MovieList = (props) => {
  return (
    <View class={styles.liste}>
      {/* {props.movies.map((movie) =>
        <Movie key={movie.key}
        id={movie.key}
        title={movie.title}
        releaseDate={movie.releaseDate}
        description={movie.description}
        image={movie.image}
        />
      )} */}
      <FlatList data={props.movies} keyExtractor={item => item.key} renderItem={movie}/>

    </View>
  );

//   return(
//       <SafeAreaView>

//       </SafeAreaView>
//   )
};

export default MovieList;

const styles = StyleSheet.create({
    liste: {
      flexShrink : 1,
        margin: 0,
        padding: 0,
      }      
})
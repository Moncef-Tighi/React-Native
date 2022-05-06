import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import Movie from './Movie.js';
import { View, Text, Image } from 'react-native';

// const movie = ({movie}) =>{
//     console.log(movie);
//     return (
//         <Movie key={movie.key}
//         id={movie.key}
//         title={movie.title}
//         releaseDate={movie.releaseDate}
//         description={movie.description}
//         image={movie.image}/>
//     )
// }   
const MovieList = (props) => {
  return (
    <View class={styles.liste}>
      {props.movies.map((movie) =>
        <Movie key={movie.key}
        id={movie.key}
        title={movie.title}
        releaseDate={movie.releaseDate}
        description={movie.description}
        image={movie.image}
        />
      )}
    </View>
  );

//   return(
//       <SafeAreaView>

//           <FlatList data={props.movies} keyExtractor={item => item.key} renderItem={movie}/>
//       </SafeAreaView>
//   )
};

export default MovieList;

const styles = StyleSheet.create({
    liste: {
        margin: 0,
        padding: 0
      }      
})
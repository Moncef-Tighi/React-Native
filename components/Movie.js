import React from 'react';
import { View, Image , Text} from 'react-native';
import { StyleSheet } from 'react-native';
const Movie = (props) => {
  return (
      <View key={props.id} style={styles.movie}>
        <View >
            <Image source={require(`../assets/${props.image}`)} style={styles.image}/>
        </View>
        <View>
          <Text style={styles.text}>{props.title}</Text>
          <Text style={styles.text}>{props.description}</Text>
          <Text style={styles.text}>{props.releaseDate}</Text>
        </View>
      </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
    movie: {
        margin: 15,
        padding: 5,
        backgroundColor: "darkslateblue",
        textAlign: "center",
        color: "white",
        flex: 1,
        flexDirection : "row",
        flexShrink : 1,
        flexBasis: "min-content",
        borderColor:"black",
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 5
    },
    image: {
        width:200,
        height: 200,
    },
    text: {
      fontSize : 16,
      padding : 10,
      color : "white",
    }
})

  
//   .movie h2 {
//     font-size: 2rem;
//     color: #f7e702;
//   }
  
//   .movie h3 {
//     color: #eccf77;
//     margin: 0;
//     font-size: 1rem;
//   }

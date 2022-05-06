import { StyleSheet, Text, View, FlatList } from 'react-native';
import dataList from '../data/data';

export default function ItemList() {

    return (
        <View style={styles.ul}>
            {dataList.map(data=> <Text style={{color:'blue', textAlign:'center'}} key={data.id}>{data.titre}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    ul: {
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
});
  
  
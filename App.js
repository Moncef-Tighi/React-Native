import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ItemList from './components/ItemList';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test edit</Text>
      <Text>New Texte</Text>
      <ItemList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


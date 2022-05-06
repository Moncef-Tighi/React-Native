
import { StyleSheet } from "react-native"
import {View, Text, TextInput, Button} from "react-native"

function AddMovie(props) {

    return (
        <View>
            <View style={styles.control}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={styles.control}>
                <Text style={styles.label} >Opening Text</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={styles.control}>
                <Text style={styles.label}>Release Date</Text>
                <TextInput style={styles.input}/>
            </View>
            <Button>Add Movie</Button>
        </View>
    )
}

export default AddMovie

const styles = StyleSheet.create({
    control: {
        margin : 1
    },
    label: {
        display: "block",
        fontWeight: "bold",
        marginBottom: 1,
        textAlign: "left"
    },
    input: {
        display : "block",
        padding: 1,
        borderRadius: 2,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black"
    }
})
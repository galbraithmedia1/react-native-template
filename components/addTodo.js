import React  from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button} from "react-native";

export default function AddTodo({submitHandler}){
    const [text, setText] = useState('');

    const changeHandler = (val ) => {
        setText(val)
    }
    return(
        <View>
        <TextInput style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}



        >
            {/* test */}

        </TextInput>
        <Button title="add" onPress={() => submitHandler(text)} color='coral'/>
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        margin: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})
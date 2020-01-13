import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const ActionInput = props => {
    const [actionItem, setActionItem] = useState('');

    const actionInputHandler = (enteredText) => {
        setActionItem(enteredText);
    };

    const addActionHandler = () => {
        props.onAddAction(actionItem);
        setActionItem('');

    }

    return (
        <Modal visible={props.visible} animationType="fade" borderColor="black" borderWidth="2"> 
        <View style={styles.inputContainer}>
            
            <TextInput placeholder="Action Item" 
                style={styles.textContainer} 
                onChangeText={actionInputHandler} 
                value={actionItem}
            />
            <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title="Go Back" color="red" onPress={props.onCancel} />
            </View>
            <View style={styles.button}>
            <Button  title="Add" onPress={addActionHandler} />
            </View>
            </View>
        </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    
    inputContainer: {
        flex:1, 
      flexDirection: 'column', justifyContent:'center', alignItems: 'center'
    },
    textContainer: {
      width: '80%', borderColor: 'black', borderWidth: 1, padding: 10, marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%'
    },
    button: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'nowrap'
    }
});

export default ActionInput;
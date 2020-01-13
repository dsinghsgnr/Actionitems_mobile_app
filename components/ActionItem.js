import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ActionItem = props => {
    return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
        <View style={styles.listActions}>
    <Text >{props.title}</Text>
  </View>
  </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    listActions: {
        padding: 10,
        marginVertical: 8,
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 1
    
      }
});

export default ActionItem;
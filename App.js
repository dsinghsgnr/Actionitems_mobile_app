import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import ActionItem from './components/ActionItem';
import ActionInput from './components/ActionInput';

export default function App() {
 
  const [actionItems, setActionItems] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  

  const addActionItem = actionItem => {
    setActionItems(currentActions => [...actionItems, {key: Math.random().toString(), value: actionItem}]);
    setIsAdding(false);
  }

  const deleteActionItem = actionId => {
    setActionItems(currentActions => {
      return currentActions.filter((action) => action.key !== actionId);
    });
  }

  const cancelHandler = () => {
    setIsAdding(false);
  }

  return (
    <View style = {styles.topPanel} >
      <Button title='Add action item' onPress={() => {setIsAdding(true)}} />
      <ActionInput 
        visible={isAdding}
        onAddAction= {addActionItem}
        onCancel= {cancelHandler}
      />
      <FlatList data={actionItems} renderItem={itemData => 
        <ActionItem 
        id={itemData.item.key}
        onDelete={deleteActionItem} 
        title={itemData.item.value}/>
      } />
   
    </View>
  );
}

const styles = StyleSheet.create({
  topPanel: {
    padding: 50
  }

});

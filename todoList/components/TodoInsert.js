import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Button} from 'react-native';

// 텍스트 입력창과 추가 버튼이 들어갈 부분이다.
const TodoInser = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addToHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={'Add an item!'}
        placeholderTextColor={'#999'}
        autoCorrect={false}
        onChangeText={todoInputHandler}
        value={newTodoItem}
      />
      <View style={styles.button}>
        <Button title={'add'} onPress={addToHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInser;

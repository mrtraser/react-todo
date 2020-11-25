import React from 'react';
import { Button, Checkbox } from 'antd';

export const ToDoItem = (props) => {
  const { item, onCheck, onRemove } = props;
  const onRemoveItem = (e) => {
    e.preventDefault();

    if (onRemove) {
      onRemove(item.id);
    }
  }

  const onCheckItem = () => {
    if (onCheck) {
      onCheck(item.id);
    }
  }

  return (
    <li className="todo-item" key={item.id}>
      <Checkbox 
        checked={item.checked}
        onChange={onCheckItem}
      >{item.name}</Checkbox>
      <Button onClick={onRemoveItem}>Remove</Button>
    </li>
  )
}
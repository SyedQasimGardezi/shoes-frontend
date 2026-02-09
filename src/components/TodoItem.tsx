import React from 'react';

export type TodoItemData = {
  id: number;
  text: string;
  completed: boolean;
  tag?: string;
};

export interface TodoItemProps {
  item: TodoItemData;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onToggle }) => {
  return (
    <li className={`todo-item ${item.completed ? 'todo-item--completed' : ''}`}>
      <button
        className={`todo-item__checkbox ${item.completed ? 'todo-item__checkbox--checked' : ''}`}
        onClick={() => onToggle(item.id)}
        aria-pressed={item.completed}
        aria-label={item.completed ? 'Mark task as active' : 'Mark task as completed'}
        type="button"
      >
        <span className="todo-item__checkmark" />
      </button>
      <div className="todo-item__content">
        <span className="todo-item__text">{item.text}</span>
        {item.tag && <span className="todo-item__tag">{item.tag}</span>}
      </div>
    </li>
  );
};

export default TodoItem;

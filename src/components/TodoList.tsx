import React, { useMemo, useState } from 'react';
import TodoItem, { TodoItemData } from './TodoItem';

const initialTodos: TodoItemData[] = [
  { id: 1, text: 'Design landing page hero section', completed: false, tag: 'Design' },
  { id: 2, text: 'Prepare sprint planning notes', completed: true, tag: 'Work' },
  { id: 3, text: 'Buy groceries for the week', completed: false, tag: 'Personal' },
  { id: 4, text: 'Review pull requests', completed: false, tag: 'Code' },
];

type Filter = 'all' | 'active' | 'completed';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItemData[]>(initialTodos);
  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');
  const [input, setInput] = useState('');

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === 'active' && todo.completed) return false;
      if (filter === 'completed' && !todo.completed) return false;
      if (query && !todo.text.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [todos, filter, query]);

  const remainingCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos],
  );

  const handleToggle = (id: number) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setTodos((prev) => [
      { id: Date.now(), text, completed: false },
      ...prev,
    ]);
    setInput('');
  };

  return (
    <section className="todo-card" aria-label="To-do list">
      <header className="todo-card__header">
        <h1 className="todo-card__title">Today&apos;s Tasks</h1>
        <p className="todo-card__subtitle">Stay on top of your work and personal tasks.</p>
      </header>

      <form className="todo-input" onSubmit={handleAdd}>
        <input
          className="todo-input__field"
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Add a new task"
        />
        <button className="todo-input__button" type="submit">
          Add Task
        </button>
      </form>

      <div className="todo-toolbar" aria-label="Filters and search">
        <div className="todo-filters" role="radiogroup" aria-label="Filter tasks">
          <button
            type="button"
            className={`todo-filter ${filter === 'all' ? 'todo-filter--active' : ''}`}
            onClick={() => setFilter('all')}
            aria-pressed={filter === 'all'}
          >
            All
          </button>
          <button
            type="button"
            className={`todo-filter ${filter === 'active' ? 'todo-filter--active' : ''}`}
            onClick={() => setFilter('active')}
            aria-pressed={filter === 'active'}
          >
            Active
          </button>
          <button
            type="button"
            className={`todo-filter ${filter === 'completed' ? 'todo-filter--active' : ''}`}
            onClick={() => setFilter('completed')}
            aria-pressed={filter === 'completed'}
          >
            Completed
          </button>
        </div>
        <div className="todo-search">
          <input
            className="todo-search__field"
            type="search"
            placeholder="Search tasks"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search tasks"
          />
        </div>
      </div>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} item={todo} onToggle={handleToggle} />
        ))}
        {filteredTodos.length === 0 && (
          <li className="todo-list__empty">No tasks match your filters.</li>
        )}
      </ul>

      <footer className="todo-footer">
        <span className="todo-footer__count">{remainingCount} tasks left</span>
      </footer>
    </section>
  );
};

export default TodoList;

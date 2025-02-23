import { useState } from 'react';
const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
    setText(e.target.value);
};

    const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
        addTodo(text);
        setText('');
    }
};

return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Add new to-do"
        value={text}
        onChange={handleChange}
        />
    <button type="submit">Add</button>
    </form>
);
};

export default AddTodo;

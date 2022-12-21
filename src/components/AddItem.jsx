import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddItem = ({addItem}) => {
  const [task, setTask] = useState('');

  const handleTask = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const itemNew = {
      id: uuidv4(),
      checked: false,
      task: task,
    };

    addItem(itemNew);
  }

  return (
    <form className="relative flex ml-2 mb-2" onSubmit={handleSubmit}>
      {" "}
      <input
        type="text"
        className="flex-auto w-80 h-12 rounded focus:outline-none px-3 focus:shadow-md"
        placeholder="Item name"
        onChange={handleTask}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-auto w-20"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItem;

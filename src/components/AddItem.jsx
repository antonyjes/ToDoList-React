const AddItem = () => {
  return (
    <form className="relative flex ml-2 mb-2">
      {" "}
      <input
        type="text"
        className="flex-auto w-80 h-12 rounded focus:outline-none px-3 focus:shadow-md"
        placeholder="Item name"
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

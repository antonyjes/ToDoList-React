import AddItem from "./AddItem";
import Search from "./Search";

const Content = ({ items, editItem, addItem, deleteItem }) => {
  return (
    <div className="py-10 h-screen bg-gray-300 px-2">
      <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-4">
            <AddItem addItem={addItem}/>
            <Search />
            {items.length ? (
              <ul>
                {items.map((item) => (
                  <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded transition"
                  key={item.id}>
                    <div className="flex ml-2">
                      <input type="checkbox" checked={item.checked} onChange={()=>editItem(item.id, {id: item.id, checked: !item.checked, task: item.task})}/>
                      <div className="flex ml-2">
                        <span className={`font-medium text-black ${item.checked ? 'line-through' : null}`}>
                          {item.task}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-1">
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => deleteItem(item.id)}>
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <h1>Your list is empty.</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

import { useState } from "react";
import AddItem from "./AddItem";
import Search from "./Search";

const Content = ({ items, setSearch, editItem, addItem, deleteItem }) => {
  const [showModal, setShowModal] = useState(false);
  const [itemModal, setItemModal] = useState('')
  const [editTask, setEditTask] = useState('')

  const handleModal = (id) => {
    setShowModal(true);
    const myitem = items.filter((item) => item.id === id);
    setItemModal(myitem[0]);
    setEditTask(myitem[0].task)
  }

  const handleEditModal = () => {
    const editTaskUpdate = {
      id: itemModal.id,
      checked: itemModal.checked,
      task: editTask,
    };

    editItem(itemModal.id, editTaskUpdate);
    setShowModal(false);
  }

  return (
    <>
      <div className="py-10 h-screen bg-gray-300 px-2">
        <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
          <div className="md:flex">
            <div className="w-full p-4">
              <AddItem addItem={addItem} />
              <Search setSearch={setSearch} />
              {items.length ? (
                <ul>
                  {items.map((item) => (
                    <li
                      className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded transition"
                      key={item.id}
                    >
                      <div className="flex ml-2">
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={() =>
                            editItem(item.id, {
                              id: item.id,
                              checked: !item.checked,
                              task: item.task,
                            })
                          }
                        />
                        <div className="flex ml-2">
                          <span
                            className={`font-medium text-black ${
                              item.checked ? "line-through" : null
                            }`}
                          >
                            {item.task}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-1"
                        onClick={() => handleModal(item.id)}>
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => deleteItem(item.id)}
                        >
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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Task</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input type="text" value={editTask} onChange={(e)=>setEditTask(e.target.value)}/>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleEditModal}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Content;

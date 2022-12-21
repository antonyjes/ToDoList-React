import { useEffect, useState } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import "./App.css";
import Content from "./components/Content";
import Title from "./components/Title";
import api from "./api/items"

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/items"
  );

  useEffect(() => {
    setItems(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = items.filter((item) =>
      item.task.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [items, search]);

  const editItem = async (id, updatedItem) => {
    try {
      const response = await api.put(`/items/${id}`, updatedItem);
      setItems(items.map((item)=>item.id === id ? {...response.data} : item));
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="App">
      <Title title="TodoList - App" />
      <>
        {isLoading && (
          <div
            className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
            role="alert"
          >
            <p className="font-bold">Loading data ...</p>
          </div>
        )}
        {fetchError && (
          <div role="alert">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Error
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{fetchError}</p>
            </div>
          </div>
        )}
        {!fetchError && !isLoading && (
          <Content items={searchResults} setSearch={setSearch} editItem={editItem}/>
        )}
      </>
    </div>
  );
}

export default App;

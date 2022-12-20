const Search = () => {
  return (
    <div className="relative flex ml-2 mb-9">
      {" "}
      <input
        type="text"
        className="flex-auto w-full h-12 rounded focus:outline-none px-3 focus:shadow-md"
        placeholder="Search Item"
      />
    </div>
  );
};

export default Search;
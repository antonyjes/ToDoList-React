const Content = () => {
  return (
    <div className="py-10 h-screen bg-gray-300 px-2">
      <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-4">
            <ul>
              <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded transition">
                <div className="flex ml-2">
                  <input type="checkbox" />
                  <div className="flex ml-2">
                    <span className={`font-medium text-black`}>Item</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

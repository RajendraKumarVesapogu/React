import { useState } from "react";

function App() {
  const [colour, setColour] = useState("red");

  return (
    <>
      <div
        className="w-screen h-screen duration-200"
        style={{ backgroundColor: colour }}
      >
        <div className="fixed flex-wrap
         bottom-12 inset-x-0 flex justify-center  
         gap-3 shadow-lg bg-white
         px-1 py-2 rounded-3xl m-10">
          <button
            className="rounded-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColour("green")}
          >
            Green
          </button>
          <button
            className="rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColour("blue")}
          >
            Blue
          </button>
          <button
            className="rounded-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setColour("red")}
          >
            Red
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

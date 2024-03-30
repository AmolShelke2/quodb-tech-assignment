import AddTodos from "./components/AddTodos";

function App() {
  return (
    <div className="sm:h-screen w-full bg-slate-200 flex flex-col justify-center items-center">
      <div className="h-full sm:h-[600px] w-full sm:w-[600px] bg-white shadow-md rounded-xl relative">
        <h2 className="text-gray-800 font-medium text-xl p-2 border-b border">
          My Todo-List
        </h2>

        <AddTodos />
      </div>
    </div>
  );
}

export default App;

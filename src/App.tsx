function App() {
  return (
    <div className="flex flex-col text-white">
      <div className="flex-1 bg-blue-500">nav</div>
      <div className="flex flex-row">
        <div className="aside lg:block hidden w-1/3 bg-yellow-500">aside</div>
        <div className="flex-1 bg-red-500">main</div>
      </div>
    </div>
  );
}

export default App;

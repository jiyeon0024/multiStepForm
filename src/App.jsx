import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="bg-[#f0f6ff] w-screen h-screen flex justify-center items-center">
      <div className="bg-white  p-5 rounded-lg min-w-[70%]  min-h-[70%] flex ">
        <SideMenu />
        {/* form  */}
        <div className="bg-yellow-500  w-2/3">personel info</div>
      </div>
    </div>
  );
}

export default App;

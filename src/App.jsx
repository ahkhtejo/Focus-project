import "./App.css";
import Teask from "./Component/task/teask";
//import tasks from "./api/data/data.json";
import Timer from "./Component/timer/timer";
import SoundPlayer from "./Component/soundPlayer/soundPlayer";
import Ayah from "./Component/Ayah/Ayah";
import BGIMG from "./assets/sound/P1.jpg";

function App() {
  return (
    <div className="min-h-screen m-0 p-0  bg-[url(./assets/sound/P1.jpg)] bg-cover  text-white flex items-center justify-center">
      <div className="w-full flex px-[5%]">
        {/* 5% margin on left and right */}
        {/* Task List - 30% */}
        {/* <div className="w-[20%] p-4 bg-gray-900 opacity-90 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Task List</h2>

          {tasks.map((Task) => (
            <Teask Name={Task.name} Description={Task.desc} key={Task.id} />
          ))}
        </div> */}
        {/* Timer - 65% */}
        <div className="w-[100%] ml-6 p-4 mt-2 bg-gray-800 opacity-90 rounded-xl h-fit">
          {/* Put your timer component or content here */}
          <div className="text-center font-stretch-95% text-6xl">
            <Timer />
            <Ayah />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

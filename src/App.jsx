import { useState } from 'react';
import NiivueLoad from './NiivueLoad.jsx';
import NiivueLoadOverlay from './NiivueLoadOverlay.jsx';
import TaskDisplay from './TaskDisplay.jsx';

export default function App() {
  const [ currentTask, setCurrentTask ] = useState(2)

  const handlePointerDownNext = () => {
    console.log("clicked")
    // this is bad and must get rid:
    // if (currentTask < 6)
      setCurrentTask((value) => value + 1)
    console.log(currentTask)
  }
  const handlePointerDownPrev = () => {
    console.log("clicked")
    // this is bad and must get rid :
    // if (currentTask > 0)
      setCurrentTask((value) => value - 1)
    console.log(currentTask)
  }

  return (
    <div style={{ paddingRight: "5vw", paddingLeft: "5vw" }}>
        <TaskDisplay currentTask={ currentTask }/>
        <button onPointerDown={ currentTask < 6 && handlePointerDownPrev } >Previous</button>
        <button onPointerDown={ currentTask > 0 && handlePointerDownNext } >Next</button>
        <h1>Trying out Niivue...</h1>
        <div id="first">
            <h2>Highest resolution file from Tirso</h2>
            <NiivueLoad imageUrl="./MNI152_T1_0.5mm.nii" />
        </div>  
        <div id="second">
            <h2>Lower resolution file from Tirso</h2>
            <NiivueLoad imageUrl="./MNI152_T1_2mm_brain.nii" />
        </div>    
        <div id="third">
            <h2>Overlaying the language association test data on the brain anatomy</h2>
            <NiivueLoadOverlay />
        </div> 
    </div>
  )
}

//export default App

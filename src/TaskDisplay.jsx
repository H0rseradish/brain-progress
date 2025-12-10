import { useEffect } from 'react';
import progress from './assets/progress.json';

console.log(progress)

export default function TaskDisplay({ currentTask }) {

    
    //const tasksArray = progress.tasks
    useEffect(() => {
        console.log('the current task has changed')
        
    }, [currentTask])

    console.log(currentTask)

    const currentTaskInfo = progress.tasks[currentTask - 1]
    
    console.log(currentTaskInfo)

    //well I haven't made the json like this  - will need to extract the date from the timestamps to do the comparison:
    // const currentHeading = highlights.filter(highlight =>
    //     Number(highlight.name) === currentTask
    // )

    // const currentHighlight = highlights.filter((highlight) => {
    //     // base it on the unix as superior to human readable?
    //    const timestamp = highlight.timestamps.start.unix
    //    // (forgot the * 1000 at first... like a twat!)
    //    const year = new Date(timestamp * 1000).getFullYear();
    //    return year === currentYear
    // })
    //ok this gets it but its an array of one - see way of dealing with this in jsx
    //console.log(currentHighlight)
    
    return (
        <div 
            style={{
                // position: "absolute",
                // bottom: 30,
                width: "100%",
                height: "fit-content",
                marginTop: "5em",
                paddingBottom: "4rem",
                pointerEvents: "none",
                textAlign: "start",
                zIndex: 2,
            }}>

            <h2 
                style={{
                    // position:"absolute",
                    // bottom: 110,
                    // right: 5,
                    width: "100%",
                    // paddingRight: "5vw",
                    // paddingLeft: "5vw",
                    fontSize: "5em",
                    // lineHeight: "1.2em",
                    color: "#89d457ff",
                    opacity: 0.6,
                    margin: 0
                }}
            >
            { currentTaskInfo.name ? currentTaskInfo.name : null }
            </h2>


            <ul style={{ fontSize: "2em", lineHeight: "2em" }}>
            { currentTaskInfo.descriptions.length === 1 ? <li>{ currentTaskInfo.descriptions }</li> : currentTaskInfo.descriptions.map((description) => <li>{ description }</li>)}
            </ul>
            { currentTaskInfo.imageURL && (
                            <img 
                                src={currentTaskInfo.imageURL}
                                style={{
                                    maxWidth: "80vw",
                                }}
                            />
                        )}
            

        </div>
    ); 
}
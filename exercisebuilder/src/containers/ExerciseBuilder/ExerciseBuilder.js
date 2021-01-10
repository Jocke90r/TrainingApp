import React from 'react'
import Aux from '../../hoc/Auxiliary'

class ExerciseBuilder extends React.Component {
    state = 
        {
            TotalExercise: [{
                id: 1,
                type: "interval",
                name: "150m interval",
                length: 150,
                times: 5,
                sets: null,
            },
            {
                id: 2,
                type: "interval",
                name: "150m interval",
                length: 150,
                times: 5,
                sets: null
            }]
        }

        
    
    render() {
        return (
            <Aux>
                <h1>Training Program</h1>
                <div>{this.state.TotalExercise.map( exercises =>{
                    return (<div>{exercises.name}</div>)
                })}</div>
            </Aux>
        )
    }
}
export default ExerciseBuilder
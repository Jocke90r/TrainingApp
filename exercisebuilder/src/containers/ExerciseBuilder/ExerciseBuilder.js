import React from 'react'
import Aux from '../../hoc/Auxiliary'
import AvailableExercises from '../../components/Layout/Exercise/AvailableExercises/AvailableExercises'
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
    AppendExercise(event) {
        console.log("appendExercise")
        const addExercise = this.state.TotalExercise
        addExercise.push("event.target.value")
        this.setState({ TotalExercise: addExercise })
    }
    render() {
        return (
            <Aux>
                <AvailableExercises click={this.AppendExercise} />

                <h1>Training Program</h1>

            </Aux>
        )
    }
}
export default ExerciseBuilder
import React from 'react'

class ActiveProgram extends React.Component {
    state = {
        activeProgram =[
            {
                "id": 1,
                "type": "interval",
                "name": "75m interval",
                "length": 75,
                "times": 10,
                "sets": null
            }
        ]
    }
    AppendState(props){
        const addExercise = this.state.activeProgram
        addExercise.push(props.ActiveProgram)
        this.setState({activeProgram: addExercise} )
    }
    render() {
        return (
            <div>{this.state.ActiveProgram.map()}</div>
        )

    }




}
export default ActiveProgram
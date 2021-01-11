import React from 'react'
import data from '../../../../data/Data.json'
import ExercisePart from '../ExercisePart/ExercisePart'
//Fetch all exercises and set them on screen
function exerciseList(props) {
    let list = data.map((data) => {
        return (
            <ExercisePart
                id={data.id}
                click={props.click}
                type={data.type}
                name={data.name}
                length={data.length}
                times={data.times}
                sets={data.sets}>
            </ExercisePart>)
    })

    return (list)


}
export default exerciseList
/* id={data.id}
        type={data.type}
        name={data.name}
        length={data.length}
        times={data.times}
        sets={data.sets}>

        <ExercisePart data={data}>
    </ExercisePart>

    data.map((data) => {
    return (<div>exerciseList</div>
    )
}*/
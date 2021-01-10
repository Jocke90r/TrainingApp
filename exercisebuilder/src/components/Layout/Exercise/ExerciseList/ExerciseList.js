import React from 'react'
import data from '../../../../data/Data.json'
import ExercisePart from '../ExercisePart/ExercisePart'
function exerciseList() {
    let list = data.map((data) => {
        return (
            <ExercisePart
                id={data.id}
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
//Någonting blir fel vid map och försöker att skicka ut den datan
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
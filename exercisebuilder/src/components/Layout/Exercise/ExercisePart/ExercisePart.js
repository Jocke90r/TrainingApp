import React from 'react'
import classes from './ExercisePart.css'
function exercisePart(props) {

    return (
        <div className={classes.Div}>
            <ul className={classes.Ul}>
                <button className={classes.Button}>
                    <div>{props.name}</div>
                </button>
                <div>Length: {props.length}</div>
                <div>Reps: {props.times}</div>
                <div>Sets: {props.sets}</div>
            </ul>
        </div>
    )
}
export default exercisePart
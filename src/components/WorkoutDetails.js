import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();

    const handleDelete = async() => {

        const res = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE'
        });
        const json = await res.json();

        if (res.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json.payload})
        }
    }
    return (
        <div className="workout-details">
            <h4> {workout.title} </h4>
            <p> <strong> Load (kg): </strong> {workout.load} </p>
            <p> <strong> Reps: </strong> {workout.reps} </p>
            <p> {formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})} </p>
            <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
        </div>
    )
}

export default WorkoutDetails;
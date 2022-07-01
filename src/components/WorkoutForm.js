import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const workout = {title, load, reps};

        const res = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const json = await res.json();

        if (!res.ok) {
            setError(json.message);
        }
        if (res.ok) {
            setError(null);
            setTitle('');
            setLoad('');
            setReps('');
            dispatch({type: 'CREATE_WORKOUT', payload: json.payload});
            console.log('workout added => ', json);
        }
    }

  return (
    <form onSubmit={handleSubmit} className="create">
        <h3>Add a New Workout</h3>

        <label> Title </label>
        <input
            type="text"
            onChange={(e) => {setTitle(e.target.value)}}
            value={title}
            />
        <label> Load (in kg) </label>
        <input
            type="number"
            onChange={(e) => {setLoad(e.target.value)}}
            value={load}
            />
        <label> Reps </label>
        <input
            type="number"
            onChange={(e) => {setReps(e.target.value)}}
            value={reps}
            />

        {error && <div className="error"> {error} </div> }

        <button> Add Workout </button>
    </form>
  )
}

export default WorkoutForm
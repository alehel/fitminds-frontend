import React, {useState, useEffect} from 'react';


let Athlete = ({id}) => {
    const [athlete, setAthlete] = useState({});
    useEffect(() => {
        fetch(`http://localhost:666/v1/athlete/${id}`)
            .then(response => response.json())
            .then(athlete => {
                console.log(athlete.athlete.recent_run_totals);
                setAthlete(athlete);
            })
    }, []);
    return (
    athlete.athlete ? <div>{athlete.athlete.recent_run_totals.count}</div> : null
    ) ;
} 

export default Athlete;
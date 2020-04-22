import React, { useEffect, useState } from 'react';
import './Athletes.css';

let Athletes = () => {
    const [athletes, setAthletes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:666/v1/athlete").then(response => response.json()).then( backAthletes => {
            setAthletes(backAthletes);
        });
    }, []);
    return (    
        athletes.map(athlete => 
            <div className="wrapper">
                <img src={athlete.profile_pic_url}/>
                <div>{`${athlete.firstname} ${athlete.surname}`}</div>
            </div>
        )
    );
}

export default Athletes;
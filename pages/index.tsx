import { useState, useEffect, use } from "react";

export default function index(){

    const [ state, setState ] = useState([]);

    async function getData(){
        const res = await fetch('/api');
        const details = await res.json();
        console.log(details)
        setState(details)
        console.log({state})
    }
    useEffect(() => {
        getData();
    },[]);
    return (
        <div>
            {state.map((e) => (
                <h1 key={e['id']}>{e['name']}</h1>
            ))}
        </div>
        
    )
}
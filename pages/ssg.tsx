import "./api"

export default function ssg({state}){
     return(
        <div>
            {state.map((e:any) => (
                <h1 key={e.id}>{e.name}</h1>
            ))}
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://localhost:3000/api');
    const state = await res.json();
    return {
        props: {
            state,
        },
        revalidate: 100,
    }
}
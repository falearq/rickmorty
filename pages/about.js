import React from 'react';

import fetch from 'isomorphic-unfetch'
import Navigation from '../components/Navigation';
import Head from 'next/head';

function About (props) {
console.warn("data", props)
return <div>
        <Head><title>Personajes de Rick y Morty</title></Head>
        <Navigation></Navigation>
       <h1>Personajes de Rick y Morty desde Next y React</h1>

{
props.data.results.map(data=>(
    <div>
        <div>
        <h3>{data.name}</h3>
        <img src={data.image} alt='Imagen de Personaje de Rick y Morty'></img>
        <p>{data.species}</p>
        <p>{data.gender}</p>
        <p>{data.origin.name}</p>
        </div>
    </div>
    ))
}
</div>
}

About.getInitialProps = async function(){
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()
    return {
        data
    }
}

export default About;


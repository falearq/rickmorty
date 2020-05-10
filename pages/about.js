import React from 'react';
import fetch from 'isomorphic-unfetch'
import Navigation from '../components/Navigation';
import Head from 'next/head';
import GlobalStyles from './index'

function About (props) {
const charContainer = { display:'flex',
                        flexWrap: 'wrap',
                       height: '100%',
                       justifyContent: 'space-evenly',
                       

}
const charCard = {  display:'flex',
                    flexFlow:'column',
                    background: '#DE7C5A',
                    padding:'2em',
                    marginTop:'2em',
                    justifyContent:'space-between',
                    height:'450px',
                    fontFamily: 'Roboto Mono', 
                       

}        
console.warn("data", props)
return <div>
        <GlobalStyles/>
        <Head><title>Personajes de Rick y Morty</title>
        
        </Head>
       
    
    <div style={charContainer}>
{
props.data.results.map(data=>(
    <div key={data.id} style={charCard}>
        <h3>{data.name}</h3>
        <img src={data.image} alt='Imagen de Personaje de Rick y Morty'></img>
        <p>Species:{data.species}</p>
        <p>Gender:{data.gender}</p>
        <p>Origin:{data.origin.name}</p>
        <p>Status:{data.status}</p>     
    </div>
    ))
}
</div>
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


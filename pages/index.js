import React from 'react';
import Navigation from "../components/Navigation.js";
import Head from 'next/head'

const Home = () => {
    return(
        <div>
        <Head>
                <title>About</title>
        </Head>
        <Navigation/>    
        <h1>Home</h1>
       
        </div>
    )
}
export default Home;



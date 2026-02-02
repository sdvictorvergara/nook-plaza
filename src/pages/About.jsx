import React from 'react'
import homeText from '../data/homeText.json'
import Navbar from '../components/Navbar/Navbar.jsx'

function About() {
    return (
        <div>
            <Navbar />
            <hr />
            <h1>About Us</h1>
            <hr />

            <section>
                <section>
                    {homeText.about.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </section>
            </section>
        </div>
    )
}

export default About
import React, { Component } from 'react';
import headshot from "./assets/small_headshot.jpg";
import Navbar from './navbar'
import { Parallax } from "react-parallax"
import Sevilladusk from "./assets/sevilladusk.jpg"


class Home extends Component {
    render(){
  return (
<div class="homebackground">
<Parallax bgImage={Sevilladusk} strength={100}>

<div>
    <Navbar />
            <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card" id="biocard">
                        <div class="card-header bg-dark">
                            <h3 id='name'>oliver j.l. renwick</h3>
                        </div>
                        <div class="card-body">
                            <div id="blurb">
                                <img id="headshot" src={headshot} alt="Headshot of Oliver Renwick"></img>
                                <div id="elevatorbio">
                                    <p>I'm a coder, linguist, writer.</p>
                                    <p>
                                    In my coding, I'm interested in networks in general, and in particular,
                                    the Ethereum blockchain and mesh networking. I have a certificate in full-stack
                                    web development from Case Western Reserve University (2020), and I'm a founding 
                                    member of Cleveland Legal Hackers.
                                    
                                    You can see some of the stuff I've built over on my
                                    <a href="./portfolio.html"> portfolio</a> page. </p>

                                    <p>
                                        As a linguist, I have worked for the last decade in professional interpretation
                                        and
                                        translation. The bulk of it has been in legal, medical, and financial/business
                                        contexts.
                                        My particular area of interest within linguistics is the deployment of metaphor
                                        and the
                                        existence/non-existence of human language as we know it without metaphor. I
                                        wrote a book
                                        examining one tiny little corner of this issue, in the context of addiction
                                        recovery narratives,
                                        hopefully for the benefit of my colleagues: <a href="https://www.amazon.com/God-Any-Other-Name-Interpreting/dp/154254260X">God
                                            by Any Other Name</a>. </p>

                                    <p>
                                        That's some of my writing, and other projects are mostly forthcoming (having
                                        kids and Doing Life
                                        sucks up a lot of time otherwise Spent Coding or Writing) -- check that out over on the <a href="./portfolio.html"> portfolio </a>
                                        as well.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="homefooter">
        Copyright Oliver JL Renwick, 2020
        
    </div>            
        
    </div>
    </Parallax>
</div>
  

);
}
}
export default Home;
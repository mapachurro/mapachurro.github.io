import React, { Component } from 'react';
import Navbar from './navbar';
import Triple from './assets/triplethreat.jpg';
//import QPQ from './assets/qpqhomepage.jpg';
import Nodeserv from './assets/nodeserv.jpg';
import KYR from './assets/knowyourrights.jpg';
import Openlease from './assets/Openlease.jpg';
import Legaltrans from './assets/legaltranslator.JPG';
import Boardmembers from './assets/boardmembers.jpg';
import Pokemongym from './assets/pokemongym.jpg';
import RPS from './assets/rps.jpg';
import Biod from './assets/biod.jpg';
import Yasaqi from './assets/yasaqi.jpg';
import Gbaon from './assets/gbaon.png';
import { Parallax } from 'react-parallax';
import Mistycity from './assets/mistycity.jpg';
import Cloudytown from './assets/cloudytown.jpg';
import Barcos from './assets/barcos.jpg';
import Plazasoleada from './assets/plazasoleada.jpg';
import Medium from './assets/medium.jpg'

class Portfolio extends Component {
    render(){
    return (

<div id="portfoliobackground">

<Navbar />

<div id="parallax-box">
    <Parallax bgImage={Plazasoleada} strength={500}>
      <div>
      <div class="container portfolio">
        <div class="row">
            <div class="card" id="portheader">
                <div class="card-header bg-dark">
                    <h3 id='name'>my work</h3>
                </div>

                <div class="container-fluid portfoliocards">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="card-deck">
                                <div class="card">
                                    <a href="https://github.com/mapachurro/triplethreat">   
                                    <img class="card-img-top" id="triple" src={Triple}
                                        alt="Triplethreat screenshot"></img></a>
                                     
                                    <div class="card-block">
                                        <h4 class="card-title">triple threat</h4>
                                        <p class="card-text">A page that I built to practice three things I like: React, vertically centering content, and i18n, in this case using i18next's React implementation.</p>
                                        <p class="card-text"><small class="text-muted">2/2020</small></p>
                                    </div>
                                </div>


                                <div class="card">
                                    <a href="https://medium.com/@oliver.renwick/how-to-build-a-personal-file-sharing-and-file-syncing-system-with-raspberry-pi-15f9ac71b17c">
                                    <img class="card-img-top" id="medium" src={Medium}
                                        alt="Medium article screenshot"></img></a>

                                    <div class="card-block">
                                        <h4 class="card-title">Building a fileshare - filesync with a Raspberry Pi</h4>
                                        <p class="card-text">I've been working on an open-source, homemade file server and file backup syncing project for 
                                        our home, and decided to write it up for the world.</p>
                                        <p class="card-text"><small class="text-muted">6/2020</small></p>
                                    </div>
                                </div>

                                {/* <div class="card">
                                    <a href="http://www.quidproquotranslations.com">
                                    <img class="card-img-top" id="qpq" src={QPQ}
                                        alt="QPQ screenshot"></img></a>

                                    <div class="card-block">
                                        <h4 class="card-title">my translation business' website</h4>
                                        <p class="card-text">I've worked in legal interpretation and translation since
                                            2010; this is the new and improved small, static website I maintain for my
                                            business.</p>
                                        <p class="card-text"><small class="text-muted">1/2019</small></p>
                                    </div>
                                </div>  */}

                                <div class="card">
                                    <a href="https://github.com/mapachurro/OpenLease">
                                    <img class="card-img-top" id="Openlease" src={Openlease}
                                        alt="OpenLease screenshot"></img></a>

                                      <div class="card-block">
                                        <h4 class="card-title">The OpenLease Project</h4>
                                        <p class="card-text">The goal of the OpenLease Project is to offer tenants and landlords the opportunity to build custom leases based on editable templates and digitally sign and record them on the Ethereum blockchain--thus preserving for perpetuity the lease and any modifications thereof. I am currently rebuilding it in React, with plans to link it to a self-hosted instance of OpenLaw, the underlying technology, on Kaleido.</p>
                                        <p class="card-text"><small class="text-muted">1/2019</small></p>
                                    </div>
                            </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    </Parallax>
    <br></br>
    <Parallax bgImage={Mistycity} strength={500}>
    <div>
    <div class="container portfolio">
        <div class="row">
            <div class="card" id="portheader">
            <div class="card-header bg-dark">
                    
                </div>
                <div class="container-fluid portfoliocards">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="card-deck">
                            <div class="card">
                                    <a href="https://github.com/mapachurro/nodeserver">
                                    <img class="card-img-top" id="nodeserv" src={Nodeserv}
                                        alt="Node server screenshot"></img></a>

                                    <div class="card-block">
                                        <h4 class="card-title">my RPi Node Server</h4>
                                        <p class="card-text">This is the Node server I use to host my little business
                                            website on a Raspberry Pi. It's simple, but I'm proud of it because it's the first coding project I did, and I taught myself to do it, before taking any courses--and the only reason it fails is when my ISP-provided router blocks access to it. </p>
                                        <p class="card-text"><small class="text-muted">1/2019</small></p>
                                    </div>
                                </div>

                                <div class="card">
                                    <a href="http://clevelandmunicipalcourt.org/judicial-services/administrative-services/interpreter-services/miranda-rights">
                                    <img class="card-img-top" id="cmc" src={KYR}
                                        alt="Muni Court screenshot"></img></a>

                                    <div class="card-block">
                                        <h4 class="card-title">Multilingual Rights Videos</h4>
                                        <p class="card-text">At Cleveland Municipal Court, we had our 'basic rights
                                            speech' for criminal defendants translated into a number of languages,
                                            then had the translators record a spoken version, put them into videos and
                                            built a section of the Court's website so that they're accessible
                                            to the world. It was a team effort, and I helped source the translations,
                                            make the recordings, and I built all the videos.
                                        </p>
                                        <p class="card-text"><small class="text-muted">1/2019</small></p>
                                    </div>
                                </div>

                                    <div class="card">
                                        <a href="https://github.com/mapachurro/Helpful-Legal-Translator">
                                        <img class="card-img-top" id="board" src={Legaltrans}
                                            alt="Now everything sounds like an overpaid trial attorney!"></img></a>

                                        <div class="card-block">
                                            <h4 class="card-title">Helpful Legal Terminology Translator</h4>
                                            <p class="card-text">Chrome extension that replaces everyday English with its unnecessarily eruduite legalese equivalent.
                                                We've all heard the recommendations: 'Write to be understood!' 'Make your texts accessible!' That's all well and good, but for those times that you'd really rather be reading something that reads like a boilerplate legal template from the 19th century, well -- now everything can read like that.
                                            </p>
                                            <p class="card-text"><small class="text-muted">3/2020</small></p>
                                        </div>
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    </Parallax>

<br></br>

    <Parallax bgImage={Cloudytown} strength={500}>
      <div>

      <div class="container portfolio">
        <div class="row">
            <div class="card" id="portheader">
            <div class="card-header bg-dark">
                    
                </div>
                <div class="container-fluid portfoliocards">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="card-deck">
                            <div class="card">
                                        <a href="https://obscure-lake-18655.herokuapp.com/">
                                        <img class="card-img-top" id="board" src={Boardmembers}
                                            alt="Hire and fire board members all day!"></img></a>

                                        <div class="card-block">
                                            <h4 class="card-title">ABC Corporation Board Member Management System</h4>
                                            <p class="card-text">This grew out of a conversation with my wife, who was struggling to keep
                                                accurate, user-friendly records of the board members at her organization. It's a simple full stack web 
                                                app that would allow you to add and remove board members easily -- with the opportunity to expand the 
                                                database and include pictures, personal info, etc.
                                            </p>
                                            <p class="card-text"><small class="text-muted">2/2019</small></p>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <a href="https://github.com/mapachurro/Pokemon-Battle-Dome">
                                            <img class="card-img-top" id="pokemongym"
                                                src={Pokemongym} alt="Pokemon screenshot"></img></a>

                                        <div class="card-block">
                                            <h4 class="card-title">Javascript Pokemon Battle Dome</h4>
                                            <p class="card-text">This is a simple game that I built initially as
                                                homework assignment for bootcamp. I revisited it later and rebuilt
                                                it properly, which my kids appreciated greatly.
                                            </p>
                                            <p class="card-text"><small class="text-muted">1/2019</small></p>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <a href="https://github.com/mapachurro/RPS-Multiplayer">
                                            <img class="card-img-top" id="rps" src={RPS}
                                                alt="RPS Screenshot"></img></a>
                                        <div class="card-block">
                                            <h4 class="card-title">Remote Rock-Paper-Scissors game</h4>
                                            <p class="card-text">I made this game for an assignment at CWRU's
                                                bootcamp--it's rudimentary, but if two sessions are
                                                connected and usernames entered, you can play rock-paper-scissors one
                                                round at a time, with basic chat functionality as well,
                                                using Google Firebase as a backend.</p>
                                            <p class="card-text"><small class="text-muted">1/2019</small></p>
                                        </div>
                                    </div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>



      </div>
    </Parallax>
<br></br>
    <Parallax
      bgImage={Barcos} strength={200}>
      <div>
      
      <div class="container portfolio">
        <div class="row">
            <div class="card" id="portheader">
            <div class="card-header bg-dark">
                    
                </div>
                <div class="container-fluid portfoliocards">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="card-deck">
                            <div class="card">
                                        <img class="card-img-top" id="biod" src={Biod}
                                            alt="Biodiesel processor image - old"></img>
                                        <div class="card-block">
                                            <h4 class="card-title">COMING SOON: BIODIESEL FOR LOLs AND PROFIT</h4>
                                            <p class="card-text">I've been making biodiesel in my garage for a year or
                                                two now, with the goal of
                                                figuring out how much I could simplify, cheapify, and streamline the
                                                process while still making
                                                a high-quality, reliable product. I'm currently making a zine about it.
                                                On the tech side, I'm interested
                                                in how a project like <a href="https://gridplus.io/">Consensy's
                                                    GRID+</a> could be integrated with small-scale biodiesel production,
                                                to tokenize and compensate small-scale biofuel producers.
                                            </p>
                                            <p class="card-text"><small class="text-muted">1/2019</small></p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img class="card-img-top" id="kham" src={Yasaqi}
                                            alt="khamriyyat"></img>
                                        <div class="card-block">
                                            <h4 class="card-title">Arab Wine Poetry - Khamriyyat</h4>
                                            <p class="card-text">One of my favorite translations I've ever done was for
                                                a course on medieval
                                                wine poetry from the Arab world, and before you ask, yes, that's a
                                                thing. Check out the
                                                source text and my <a href="./assets/images/yasaqi.jpg"> 'authentic'</a>
                                                vs <a href="./assets/images/heybartender.jpg">'redneck rock'</a>
                                                translations.
                                            </p>
                                            <p class="card-text"><small class="text-muted">1/2019</small></p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <a href="https://www.amazon.com/dp/154254260X">
                                            <img class="card-img-top" id="gbaon" src={Gbaon}
                                                alt="GBAON cover"></img></a>

                                        <div class="card-block">
                                            <h4 class="card-title">God by Any Other Name</h4>
                                            <p class="card-text">I'm particularly interested in the role that metaphor
                                                plays in human language, thought, and expression.
                                                In this vein, I wrote a book that, hopefully, would be helpful to my
                                                fellow linguists, about the way that addiction and
                                                addiction recovery is expressed in English and Spanish. Hit the image
                                                above to go to Amazon, or check out more about it
                                                over on my <a
                                                    href="http://quidproquotranslations.com/updates_and_news.html">personal
                                                    site</a>.
                                            </p>
                                            <p class="card-text"><small class="text-muted">1/2019</small></p>
                                        </div>
                                    </div>


</div>
</div>
</div>
</div>
</div>
</div>
</div>

      
      
      </div>


    </Parallax>
    <br></br>
        <div id="portfoliofooter">
        Copyright Oliver JL Renwick, 2020
    </div>

</div>
</div>
);

}
}

export default Portfolio;
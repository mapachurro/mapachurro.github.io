import React, { Component } from 'react';
import Navbar from './navbar';
import QPQ from './assets/qpqhomepage.jpg';
import Githubprof from './assets/githubprof.jpg';
import Linkedin from './assets/linkedin.jpg';
import Twitterpage from './assets/twitterpage.jpg'
import { Parallax } from 'react-parallax';
import Spires from "./assets/spires.jpg"


class Channels extends Component {
    render(){
    return (
<div class="channelsbackground">
    <Parallax bgImage={Spires} strength={20}>
<div>
    <Navbar />
        
    <div class="container">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <div class="card" id="biocard">
                        <div class="card-header bg-dark">
                            <h3 id='name'>my channels</h3>
                        </div>
                        <div class="card-body">
                            <div id="contactchannels">
                                {/* this is for future dev: using iframely to embed content: https://iframely.com/docs/reactjs */}
                                <script src="//cdn.iframe.ly/embed.js" async></script>

                                <a href="https://www.linkedin.com/in/oliverjlrenwick/">LinkedIn</a>
                                {/* This next line will eventually be a cool embedded badge */}
                                <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
                                <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="oliverjlrenwick"><a class="LI-simple-link" href='https://www.linkedin.com/in/oliverjlrenwick?trk=profile-badge'></a></div>
                                <a href="https://www.linkedin.com/in/oliverjlrenwick/"><img class = "card-image-top embed-responsive" id="linkedin" src={Linkedin}></img></a>
                                <br></br>
                                {/* <a href="https://stackoverflow.com/users/10504254/oliver-renwick">stack overflow</a>
                                <br></br> */}
                                <a href="https://github.com/mapachurro">github</a>
                                <a href="https://github.com/mapachurro" ><img class= "card-image-top embed-responsive" id="githubpic" src={Githubprof}></img></a>
                                <br></br>
                                <a href="https://twitter.com/mapachurro">twitter</a>
                                <a href="https://twitter.com/mapachurro"><img class= "card-image-top embed-responsive" id="twitterpage" src={Twitterpage}></img></a>
                                <br></br>
                                {/* Again, this next line will be an embedded Twitter feed */}
                                <a class="twitter-timeline" href="https://twitter.com/mapachurro?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                <br></br>

                                <br></br>
                                <a href="http://www.quidproquotranslations.com">my translation business</a>
                                    <br></br>
                                    <img class="card-image-top embed-responsive" id="qpq" src={QPQ}></img>
                                
                                <br></br>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
            <div id="footer">
        Copyright Oliver JL Renwick, 2020
        
</div>
        </div>

    </div>

    </div>
    </Parallax>
    </div>

    );
}
}
export default Channels;

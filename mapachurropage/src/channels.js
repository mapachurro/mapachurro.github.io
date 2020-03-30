import React, { Component } from 'react';
import Navbar from './navbar'

class Channels extends Component {
    render(){
    return (
<div class="channelsbackground">
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
                                <a href="https://www.linkedin.com/in/oliverjlrenwick/">LinkedIn</a>
                                <br></br>
                                <a href="https://stackoverflow.com/users/10504254/oliver-renwick">stack overflow</a>
                                <br></br>
                                <a href="https://github.com/mapachurro">github</a>
                                <br></br>
                                <a href="https://twitter.com/mapachurro">twitter</a>
                                <br></br>
                                <img id="githubpic" src="./assets/images/githubpic.png"></img>
                                <br></br>
                                <br></br>
                                <a href="http://www.quidproquotranslations.com">my translation business</a>
                                    <br></br>
                                    <img id="qpq" src="./assets/images/qpqhomepage.jpg"></img>
                                
                                <br></br>
                                <br></br>
                                <a class="twitter-timeline" data-width="500" data-height="1000" data-theme="dark" href="https://twitter.com/quidproquotran1?ref_src=twsrc%5Etfw">Tweets
                                    by quidproquotran1</a>
                                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                <br></br>
                                <a href="http://quidproquotranslations.com/prettyuseless.html">an archive of said
                                    translations, and a manifesto</a>
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
    </div>
    );
}
}
export default Channels;

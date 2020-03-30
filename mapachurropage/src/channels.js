import React from 'react';

function Channels() {
    return (
<div class="channelsbackground">
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
              l                      translations, and a manifesto</a>
                                <br></br>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <br></br>
        <footer id="footer">Copyright Oliver Renwick, 2018</footer>
    </div>

    </div>
    );
}

export default Channels;

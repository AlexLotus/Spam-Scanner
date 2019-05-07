import React, { Component } from "react";
import "./../index";
import "./../App.css";
import logo from "./../images/ss.png";
import img1 from "./../images/img1.png";
import img2 from "./../images/img2.png";
import img3 from "./../images/img3.png";
import { Link } from "react-router-dom";
import { homedir } from "os";
import "./../App";
import { Button, Image, Text } from "rebass";

export default class Home extends Component {
  render() {
    return (
      <div className="gray">
        <section id="landing" className="linear">
          <Image width={[1 / 3, 1 / 3, 1 / 4]} src={logo} />
          <h1 className="white">Welcome to Spam Scanner </h1>

          <p className="lead white">
            Spammy is an application made for simplifying the spam filtering
            process. Use our FREE online service to filter out multiple
            messages! You can submit your requests with messages seperated by
            commas! Support for file uploads and downloads are in planning 2019!
          </p>

          <div>
            <br />
            <Link to="/new">
              <Button bg="#00deff" px={[3, 5]} py={[2, 3]}>
                Try it out!
              </Button>
            </Link>
          </div>
          {/* <Link to="/new">
                        <input type="button" value="Try it out!" className="btn btn-lg btn-danger" />
                    </Link> */}
        </section>

        

        <section id="contact" className="gray">
          <Image src={img1} className="img1" />
          <Image src={img2} className="img2" />
          <Image src={img3} className="img3" />
        
        
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>About us</h2>
                <p className="lead">

                  This product was created during a senior project at the Univeristy of Central Missouri,
                  created by Alex Kondratenko, Kishan Polekar, 
                  Shane-Lewes Tenorio, and Ryan Charles. 
                  <Text
                    fontSize={[ 3, 4, 5 ]}
                    fontWeight='bold'
                    color='lightblue'>
                    Alex Kondratenko
                  </Text>

                  <Image
                    width={[ 1, 1, 1/2 ]}
                    src='https://avatars1.githubusercontent.com/u/16922103?s=400&v=4'
                    borderRadius={8}
                  />
                  <Text
                    fontSize={[ 3, 4, 5 ]}
                    fontWeight='bold'
                    color='lightblue'>
                    Kishan Polekar
                  </Text>
                  <Image
                    width={[ 1, 1, 1/2 ]}
                    src='https://media.licdn.com/dms/image/C5603AQGJaMyJf34p1A/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=KCsGLy11g63isr7y2rHhq02hUj8SUtQG-NZUuJos8v4'
                    borderRadius={8}
                  />
                   <Text
                    fontSize={[ 3, 4, 5 ]}
                    fontWeight='bold'
                    color='lightblue'>
                    Ryan Charles
                  </Text>
                  <Image
                    width={[ 1, 1, 1/2 ]}
                    src='https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/61901_10151524487449966_624369307_n.jpg?_nc_cat=101&_nc_ht=scontent.fmkc1-1.fna&oh=7341f3e7f3e6b2f984d73915e12d03cb&oe=5D2A84D0'
                    borderRadius={8}
                  />
                  <Text
                    fontSize={[ 3, 4, 5 ]}
                    fontWeight='bold'
                    color='lightblue'>
                    Shane Lewes-Tenorio
                  </Text>
                  <Image
                    width={[ 1, 1, 1/2 ]}
                    src='https://media.licdn.com/dms/image/C4E03AQGr7zrLfcfdZg/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=Pu98sWZ8GkzZXU1bLwVDWaVs4_4lSTqmCK5ZRCMrtYU'
                    borderRadius={8}
                  />
                 < Text
                    fontSize={[ 10, 10, 2 ]}
                    fontWeight='bold'
                    color='dark'>
                    And
                 </Text>
                  <Text
                    fontSize={[ 3, 4, 5 ]}
                    fontWeight='bold'
                    color='lightblue'>
                    Dr. Yui Man Lui
                  </Text>
                  <Image
                    width={[ 1, 1, 1/2 ]}
                    src='https://www.ucmo.edu/college-of-health-science-and-technology/school-of-computer-science-and-mathematics/computer-science-and-software-engineering/faculty/yui-man-lui/lui.png'
                    borderRadius={8}
                  />
                  <section id="Download" className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Download</h2>
                  <p className="lead">
                  <a href="https://github.com/AlexLotus/Spam-Scanner" >
                  <button type="button" class="btn btn-info">Spam-Scanner Download</button>
                  <button class="btn btn-success" onclick=" window.open('http://google.com','_blank')"> Spam Scanner Instructions</button>
                  <p className="lead">
                  <a href="https://nodejs.org/en/download/" >
                  <button type="button" class="btn btn-info">Node.js download</button>
                  <button class="btn btn-success" onclick=" window.open('https://blog.teamtreehouse.com/install-node-js-npm-windows','_blank')"> Node.js instruction</button>
                </a>  
                </p>
                </a>
                </p>
              </div>
            </div>
          </div>
        </section>
          <section id="HowTo" className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>How to use</h2>
                <p className="lead">
                <div>
                  <p class="text-left">
                <div>{"It's simple, just follow the instructions."}</div>
                <div>{"1. Click the filter tab "}</div>
                <div>{"2. Type in some text (comma deliniated) click submit"}</div>
                <div>{"2a. Upload some text from a .txt file by clicking the upload button on the screen."}</div>
                </p>
            </div>
                   
                  
                  
                 
                </p>
              </div>
            </div>
          </div>
        </section>
        
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

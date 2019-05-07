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
import { Button, Image, Text, Flex, Box } from "rebass";

export default class Home extends Component {
  render() {
    return (
      <div>
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

        <section id="contact" className="white">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="about-header-img">
                  <Image src={img1} className="img1" />
                  <Image src={img2} className="img2" />
                  <Image src={img3} className="img3" />
                </div>
                <h2>About us</h2>
                <p className="lead">
                  This product was created during a senior project at the
                  Univeristy of Central Missouri, created by Alex Kondratenko,
                  Kishan Polekar, Shane-Lewes Tenorio, and Ryan Charles.
                  <Flex
                    flexWrap="wrap"
                    justifyContent="space-around"
                    mx={[1, 2, "-200px"]}
                    padding={2}
                  >
                    <Box width={[1, "50%"]} my={2}>
                      <Text
                        fontSize={[3, 4, 5]}
                        fontWeight="bold"
                        color="lightblue"
                      >
                        Alex Kondratenko
                      </Text>
                      <Image
                        width={[1, 1, 1 / 2]}
                        src="https://avatars1.githubusercontent.com/u/16922103?s=400&v=4"
                        borderRadius={8}
                      />
                    </Box>
                    <Box width={[1, "50%"]} my={2}>
                      <Text
                        fontSize={[3, 4, 5]}
                        fontWeight="bold"
                        color="lightblue"
                      >
                        Kishan Polekar
                      </Text>
                      <Image
                        width={[1, 1, 1 / 2]}
                        src="https://myedu-images-prod01.s3.amazonaws.com/7642067-49a35f88cdd17d8e1e0370b1048b46d0-thumb"
                        borderRadius={8}
                      />
                    </Box>
                    <Box width={[1, "50%"]} my={2}>
                      <Text
                        fontSize={[3, 4, 5]}
                        fontWeight="bold"
                        color="lightblue"
                      >
                        Ryan Charles
                      </Text>
                      <Image
                        width={[1, 1, 1 / 2]}
                        src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/61901_10151524487449966_624369307_n.jpg?_nc_cat=101&_nc_ht=scontent.fmkc1-1.fna&oh=7341f3e7f3e6b2f984d73915e12d03cb&oe=5D2A84D0"
                        borderRadius={8}
                      />
                    </Box>
                    <Box width={[1, "50%"]} my={2}>
                      <Text
                        fontSize={[3, 4, 5]}
                        fontWeight="bold"
                        color="lightblue"
                      >
                        Shane Lewes-Tenorio
                      </Text>
                      <Image
                        width={[1, 1, 1 / 2]}
                        src="https://avatars1.githubusercontent.com/u/12619633?s=460&v=4"
                        borderRadius={8}
                      />
                    </Box>
                  </Flex>
                  <Text fontSize={[10, 10, 2]} fontWeight="bold" color="dark">
                    And
                  </Text>
                  <Box height={0.5}>
                    <Text
                      fontSize={[3, 4, 5]}
                      fontWeight="bold"
                      color="lightblue"
                    >
                      Dr. Yui Man Lui
                    </Text>
                    <Image
                      width={[1, 1, 1 / 2]}
                      src="https://www.ucmo.edu/college-of-health-science-and-technology/school-of-computer-science-and-mathematics/computer-science-and-software-engineering/faculty/yui-man-lui/lui.png"
                      borderRadius={8}
                    />
                  </Box>
                  <section>
                    <div
                      id="Download"
                      className="bg-light black mt-5 py-5 rounded"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-8 mx-auto">
                            <h2>Download</h2>
                            <p className="lead">
                              <a href="https://github.com/AlexLotus/Spam-Scanner">
                                <button type="button" class="btn btn-info">
                                  Spam-Scanner Download
                                </button>
                                <button
                                  class="btn btn-success"
                                  onclick=" window.open('http://google.com','_blank')"
                                >
                                  {" "}
                                  Spam Scanner Instructions
                                </button>
                                <p className="lead">
                                  <a href="https://nodejs.org/en/download/">
                                    <button type="button" class="btn btn-info">
                                      Node.js download
                                    </button>
                                    <button
                                      class="btn btn-success"
                                      onclick=" window.open('https://blog.teamtreehouse.com/install-node-js-npm-windows','_blank')"
                                    >
                                      {" "}
                                      Node.js instruction
                                    </button>
                                  </a>
                                </p>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="HowTo"
                      className="bg-light black my-2 py-5 rounded"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-8 mx-auto">
                            <h2>How to use</h2>
                            <p className="lead">
                              <div>
                                <p class="text-left">
                                  <div>
                                    {
                                      "It's simple, just follow the instructions."
                                    }
                                  </div>
                                  <div>{"1. Click the filter tab "}</div>
                                  <div>
                                    {
                                      "2. Type in some text (comma deliniated) click submit"
                                    }
                                  </div>
                                  <div>
                                    {
                                      "2a. Upload some text from a .txt file by clicking the upload button on the screen."
                                    }
                                  </div>
                                </p>
                              </div>
                            </p>
                          </div>
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

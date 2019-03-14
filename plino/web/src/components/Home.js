import React, { Component } from "react";
import "./../App.css";
import logo from "./../images/ss.png";
import { Link } from "react-router-dom";


export default class Home extends Component {
    render() {
        return (
            <div>
                <section id="landing" className="linear">
                    <img className="logo" src={logo}/>
                    <h1 className="white">Online spam filtering done easy.</h1>
                    <p className="lead white">
                        Spammy is an application made for simplifying the spam filtering process.
                        Use our FREE online service to filter out multiple messages! You can submit
                        your requests with messages seperated by commas! Support for file uploads
                        and downloads are in planning 2019!
                    </p>

                    <Link to="/new">
                        <input type="button" value="Try it out!" className="btn btn-lg btn-danger" />
                    </Link>
                </section>

                <section id="services" className="bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                            <h2>Services we offer</h2>
                            <p className="lead">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                                optio velit inventore, expedita quo laboriosam possimus ea
                                consequatur vitae, doloribus consequuntur ex. Nemo assumenda
                                laborum vel, labore ut velit dignissimos.
                            </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                            <h2>Contact us</h2>
                            <p className="lead">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                                odio fugiat voluptatem dolor, provident officiis, id iusto!
                                Obcaecati incidunt, qui nihil beatae magnam et repudiandae
                                ipsa exercitationem, in, quo totam.
                            </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
}
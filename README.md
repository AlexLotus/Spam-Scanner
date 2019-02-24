# Spam Scanner

_Cloned from and built on the work of [Plino](https://github.com/tasdikrahman/plino) and [Spammy](https://github.com/tasdikrahman/spammy)_

## About

A spam scanning web application

## Goals

A user should be able to sign in with their email address that they want to scan. The backend will check the contents of a set of emails inside the inbox for spam. Any spam found will then be presented for the user to act on.

## Backend

- Python 3.7
  - Flask web microframework

## Frontend

- Javascript
  - React.js

## Setup

Steps borrowed and modified from [Flask Documentation](http://flask.pocoo.org/docs/1.0/installation/) & Plino [Readme](https://github.com/tasdikrahman/plino) + [Documentation](https://github.com/tasdikrahman/plino/blob/master/CONTRIBUTING.md)

The project can be cloned at any step after creating the root project folder and before installing dependencies.

1. Install python 3.x
2. Create the root project folder
3. Go to root project folder and create a venv folder

```bash
python3 -m venv venv
```

3. Activate the environment

```bash
. venv/bin/activate
```

4. Install Flask

```bash
pip3 install Flask
```

5. Source virtual environment and install dependencies

```bash
$ source venv/bin/activate
# Clone this project if you haven't yet
# (venv)$ git clone https://github.com/AlexLotus/Spam-Scanner.git
(venv)$ cd plino
(venv)$ pip3 install -r requirements.txt
```

## Developing Spam-Scanner

The following commands are used to develop Spam-Scanner.

### Front-end Development

This uses webpack-dev-server to automatically apply any changes made to the front-end. Allowing you to see your changes in near-realtime from the browser.

```bash
# From root directory
$ cd plino/web
$ npm start
# Front-end app then builds and runs from http://localhost:3000/
```

### Back-end development

Run this command after making changes to the back-end to see them.

```bash
# From root directory
$ make run
# Back-end changes then runs on http://127.0.0.1:8000
```

## Running Spam-Scanner

The following commands must be executed to run Spam-Scanner with the python server serving the web page.

```bash
# From root directory
$ cd plino/web
$ npm run-script build
$ cd ../../
$ make run
```

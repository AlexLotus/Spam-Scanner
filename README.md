# Spam Scanner

_Cloned from and built on the work of [Plino](https://github.com/tasdikrahman/plino) and [Spammy](https://github.com/tasdikrahman/spammy)_

## About

A spam scanning web application

## Goals

A user should be able to sign in with their email address that they want to scan. The backend will check the contents of a set of emails inside the inbox for spam. Any spam found will then be presented for the user to act on.

## Backend

- Python >=3
  - Flask web microframework

## Frontend

- Javascript
  - React.js

## Setup

Steps borrowed and modified from [Flask Documentation](http://flask.pocoo.org/docs/1.0/installation/) & Plino [Readme](https://github.com/tasdikrahman/plino) + [Documentation](https://github.com/tasdikrahman/plino/blob/master/CONTRIBUTING.md)

1. Install python 3.x
2. Go to root project folder and create a venv folder

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
(venv)$ cd plino
(venv)$ pip3 install -r requirements.txt
```

## Running Spam-Scanner

The following command must be done to run Spam-Scanner

```bash
$ make run
```

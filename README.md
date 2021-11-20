
# Project Title
Our site name :
 **Sweet Spot**

# Description of the project
Our site is displaying some movies, books, and audios from API Itunes.
users can have an account to sign up and log in, also can search for specific items, and add some of the items to their favorite page.
Users can go between pages in an easier way.
our site is responsive and has a simple design.we made this site using React as frontend and we worked in Express.js as backend.

# API
We worked with API Itunes to get some data and display it on our site.
We got movies, audios, and books and display it for users with React. 

# Function 
Register and login functions are a type of computer memory used to quickly accept, store, and transfer data and instructions that are being used immediately by the CPU.
We use it to admit users to have an account and have the ability to log in to our site.

A search box or search field is a common graphical user interface design element, one which allows the user to enter letters, words, and terms in a web search engine, database, website, archive, or list of options. As a result function, users expect it to return content or options directly related to their input.

Favorite function allow users to add and show their own items to the favorites list by clicking the heart button and they can remove them from their favorites.

# Function's parameters or arguments and returns 
We use standard Express parameters. “req” is for the request object. This is used in your Express route handler function to get data from the client (such as a web-browser). For example: username or order number could be attached to the req object. “res” is for the response object and you will use this in your Express route handler function to send data back to the client. For example: a 200 success status code and some data (often in json format) that your client requested from the server (such as a display all movies). “next” is used to call other “middle-ware” functions with Express which can handle other things such as logging or error handling. You can also name them something else such as (request, response) and sometimes you won’t need to use next so there may only be 2 arguments (req and res).
 



## Installation
We have installed react node js and some packages for express node js. 
We have installed some packages from bootstrap for our design.

Install Cap2-Frontend with npm

```bash
  git clone for Cap2-Frontend 
  cd Cap2-Frontend  
  npm i react-scripts
  npm i react-router-dom
  npm start 
```
Install react-bootstrap for our styling 

```bash 
 npm install react-bootstrap bootstrap@5.1.3
```
Install axios to make HTTP requests from node js 
```bash
 npm i axios
```

**Install Cap2-Backend with npm**

```bash
  git clone for Cap2-Frontend 
  cd Cap2-Frontend  
```
Install Express and save it in the dependencies list 
```bash
 npm install express --save
``` 
Install axios to make HTTP requests to API  
```bash
 npm i axios
```
Install CORS middleware that can be used to enable CORS with various options
```bash
npm i cors
``` 
Install dotenv to create secret keys that your application needs
```bash
npm i dotenv
```
Install helmet that secure your Express apps by setting various HTTP headers.
```bash
npm i helmet
```
Install iTunes Search library that makes search faster
```bash
npm i itunes-api-search
```
## API Reference

#### Search for movies

```http
movieRouter.get("/search/:term", searchMovie);
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `term`    | `string` | **Required**. Term of item to search |

#### Get All Movies

```http
 movieRouter.get("/movies", getAllMovies);
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `movies`  | `string` | *get all movies form API*.         |




## Usage/Examples

```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {

  const [Movies, setMovies] = useState([]);
  const [Audio, setaudio] = useState([]);
  const getMyAPI = async () => {
    const response = await axios.get("https://sweetspot-8-back.herokuapp.com/search/great");
    setMovies(response.data.results);
  };
  const getMyaudio = async () => {
    const response = await axios.get("https://sweetspot-8-back.herokuapp.com/search/audio");
    setaudio(response.data.results);
  };
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

PORT `4000` 




## Run Locally

Clone the project

```bash
  git clone https://github.com/group8-tuwaiq/Cap2-Frontend.git
```

Go to the Cap2-Frontend directory

```bash
  cd Cap2-Frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Screenshots

[Sweetspots-8 Screenshot](https://files.slack.com/files-pri/T02FM3FE1DJ-F02M64H48SZ/image.png "Home page")


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Optimizations

We have a search function on our site that gives the ability to users to search for specific items and its display it in faster way according to their needs.
Also, we have a favorite button when the user clicks on it to add the items to a favorite page, also the user has the ability to remove the item from the favorite list.
The user has the ability to have an account on our site by registering if he does not have an account otherwise he can log in if he has an account on our site.
## Lessons Learned

**learned while building project**

We learned how to link backend with frontend by using React and Express.js also how to get data form API.

**Challenges we faced during building our project**

The biggest challenge we faced in our project is setting time with diffrent group members.
also sharing diffrent files.
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| White Color | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| dark shade of gray Color | ![#](https://via.placeholder.com/10/444444?text=+) #444444 |
| Persian Green Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Free Speech Red Color | ![#C70E0E](https://via.placeholder.com/10/C70E0E?text=+) #C70E0E |


## Authors

- [@group8-tuwaiq](https://github.com/group8-tuwaiq)


## License

[Tuwaiq](https://tuwaiq.edu.sa/en/#prog_section/)


## Other Common Github Profile Sections
👩‍💻 I'm currently working on...

🧠 I'm currently learning...

👯‍♀️ I'm looking to collaborate on...

🤔 I'm looking for help with...

💬 Ask me about...

📫 How to reach me...

😄 Pronouns...

⚡️ Fun fact...


## 🚀 About Me
We are a full stack developer...


## 🛠 Skills
Javascript, HTML, CSS, React node js , Express.js 



## Demo 

Our project deployed in herokuapp 
(https://sweetspots-8-front.herokuapp.com/)
## Roadmap

- Additional browser support

- Add more integrations


# Contributors

A great group from **programming bootcamp tuwaiq** had programmed this site 

**Scrum**:   *Suliman Saleh*.

**Member**:  *Thoraya Alrashidi*.

**Member**:  *Rawan Almutairi*. 

# Acknowledgements
We would like to express our special thanks of gratitude to our teachers as well as our **tuwaiq javaScript bootcamp** who gave us the golden opportunity to do this wonderful project on the topic (Sweet Spot), which also helped us in doing a lot of Research and we came to know about so many new things. 
*We are really thankful to them*.

import React from "react";
import ballGameImg from "../../assets/portfolio resources/Ball Game.JPG";
import blinkingTilesImg from "../../assets/portfolio resources/Blinking Tiles Game.JPG";
import BankImg from "../../assets/portfolio resources/Demo bank app.JPG";
import HangmanImg from "../../assets/portfolio resources/Hangman.JPG";
import randomSpotImg from "../../assets/portfolio resources/random spot.JPG";
import DiesRollImg from "../../assets/portfolio resources/Roll the dies.JPG";
import SlamBookImg from "../../assets/portfolio resources/SlamBook.JPG";
import staticWebsiteImg from "../../assets/portfolio resources/Static website.JPG";
import TodoListImg from '../../assets/portfolio resources/Todo List.JPG';


const projectObject = [
  {
    id: 1,
    title: "Blinking Tiles",
    img: blinkingTilesImg ,
    overview: "As soon as you load the page the timer starts and a random block blinks. You must click the blinked block and another random block blinks. If you click the wrong block the game is stopped and the score is displayed. High score is displayed using local storage.",
    link: 'https://github.com/karthik11135/delta-task/tree/main/hackermode'
  },
  {
    id: 2,
    title: "Ball Game",
    overview: "The game is so simple. Just don't make the ball fall or hit the spikes. You have to use the obstacles coming randomly and you'll have 3 lives. The score is displayed when you run out of your lives",
    link: 'https://github.com/karthik11135/Ball-Game',
    img: ballGameImg,
  },
  {
    id: 3,
    title: "Dummy Bank",
    overview: "This is a very basic vanilla js project. You can send money to other users and also take loans from the bank. You can delete the user as well.",
    img: BankImg ,
    link: 'https://github.com/karthik11135/Dummy-Bank',
  },
  {
    id: 4,
    title: "Hangman",
    overview: "This is a duplicate of the very famous game Wordle. You just have to guess the letters of the word. And in each wrong guess, a hangman is formed slowly.",
    img:  HangmanImg,
    link: 'https://github.com/karthik11135/Hangman',
  },
  {
    id: 5,
    title: "Random Spots",
    overview: "A spot appears on the screen and if you click it, it goes to a random position on the screen. And a wrong click elswhere stops it to move thereby displaying the score.",
    img: randomSpotImg ,
    link: 'https://github.com/karthik11135/Random-spots',
  },
  {
    id: 6,
    title: "Roll the dies",
    overview: "This is a very interesting game. It's a two player game. Roll the dies in your turn and increase you score. Person wins if we scores hundred. You can hold your score after several throws. But if you throw 1, all the score which wasn't held will be lost. Everything is clearly explained in the rules section.",
    img: DiesRollImg ,
    link: 'https://github.com/karthik11135/Roll-The-dies',
  },
  {
    id: 7,
    title: "SlamBook",
    overview: "I've made this project using Redux Toolkit. Users can sign up and login. They can search for other users in the searchbox and comment on their profiles. The other users when logged in their accounts will be able to see your comments on them.",
    img:  SlamBookImg,
    link: 'https://github.com/karthik11135/SlamBook',
  },
  {
    id: 8,
    title: "Static Website",
    overview: "It's a very basic static website. A boring one, believe me.",
    img: staticWebsiteImg ,
    link: 'https://github.com/karthik11135/Staticwebsite',
  },
  {
    id: 9,
    title: "Todo-List",
    overview: "This is my first ReactJs project. This project is self-explanatory. You can add your to-do's and remove them",
    img: TodoListImg,
    link: 'https://github.com/karthik11135/Todo-list',
  }
];


export default projectObject;
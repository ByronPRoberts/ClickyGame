import React from "react";
import Navbar from "./navbar/navbar";
import Card from "./main/card";
import Bodywrapper from "./bodywrap/bodywrapper";
import GeorgeCard from "./cards.json";

class ScoreCounter extends React.Component {
  constructor(props){ 
    super(props);
    this.state = {
    clicked: [],
    Georges: GeorgeCard,
    count: 0,
    score: 0,
    message: "Start by clicking a Costanza below. Try to click all nine Costanzas without clicking one twice! You score a point for every consecutive Costanza clicked. Good luck!"
  };}


  handleClick = event => {

    const clickId = event.target.id;
    if (this.state.clicked.includes(clickId)) {
       this.setState({ 
          count: 0,
         message:"Believe it or not you've clicked the wrong George!",
          clicked:[]
      },
      ()=> console.log(this.state))
    } else if (!this.state.clicked.includes(clickId) && this.state.count < 9) {
        const {count, score} = this.state;
        const newCount = count +1;
        const newScore = newCount>score ? newCount : score;
        var prevState = this.state.clicked;
        prevState.push(clickId);

        return this.setState({
            message: "Good guess!",
            count: newCount,
            score: newScore,
            clicked: prevState
        })
      } else {
        return this.setState({
            message: "You got them all!!!",
            count: 0,
            score: this.state.score,
        })
      }
    }

  
  cardShuffle = array => {
    var i = array.length, h, j;
    while (i) {
      j = Math.floor(Math.random() * i--);
      h = array[i];
      array[i] = array[j];
      array[j] = h;
    }
    return array;
  }
  render() {
    return (
      <Bodywrapper>
        <Navbar />
        <header className="header">
          <h3>Score:{this.state.count}</h3>
          <h3>Top Score:{this.state.score}</h3>
          <h3>
            {this.state.message}
          </h3>
          
        </header>
        <div className = "row justify-content-md-center">
          {this.cardShuffle(GeorgeCard).map((data, index) =>{
            return(
              <Card 
              key={index}
              handleClick={this.handleClick}
              image={data.image}
              id={data.id}/>
            );
          })}
          
        </div>
        <footer className="footer">
          <div className="bottom">
            "Byron's Clicky Game!
            <img alt="react" src="../assets/images/favicon.ico" />
          </div>
        </footer>
      </Bodywrapper>
    );
  };
};
export default ScoreCounter;

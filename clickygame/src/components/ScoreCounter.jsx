import React from "react";
import Navbar from "./navbar";
import Card from "./main";
import Bodywrapper from "./bodywrap";
import GeorgeCard from "./cards.json";

class ScoreCounter extends React.Component {
  state = {
    Georges: GeorgeCard,
    count: 0,
    score: 0,
    message: "Start by clicking a Costanza below. Try to click all nine Costanzas without clicking one twice! You score a point for every consective Costanza clicked. Good luck!"
  };

  // handleCount = () => {
  //     this.setState({count: this.state.count + 1});
  // };

  setClicked = id => {
    const GeorgeOrder = this.state.Georges;

    const clickedCard = GeorgeOrder.filter(match => match.id === id);

    if (clickedCard[0].clicked) {
      return this.setState({ 
          count: 0,
         message:"Believe it or not you've clicked the wrong George!",
          Georges: GeorgeCard.sort(()=>Math.random() - 1)
      })
    } else {
      if (this.state.count < 9) {
        clickedCard[0].clicked = true;
        const {count, score} = this.state;
        const newCount = count +1;
        const newScore = newCount>score ? newCount : score;

        return this.setState({
            message: "Good guess!",
            count: newCount,
            score: newScore,
            Georges: GeorgeCard.sort(()=>Math.random() - 1)
        })
      } else {
        return this.setState({
            message: "You got them all!!!",
            count: 0,
            score: this.state.score,
            Georges: GeorgeCard.sort(()=>Math.random() - 1)
        })
      }
    }
  };
  //add function that take in this.state.George, shuffle it, and map over the new array and render cards
  // <Card id={elem.id} />
  render() {
    return (
      <Bodywrapper>
        <Navbar />
        <header className="header">
          <h1> Byron's Clicky Game</h1>
          <h3>
            {this.state.message}
          </h3>
        </header>
        <Card />
        <footer className="footer">
          <div className="bottom">
            "Byron's Clicky Game!
            <img alt="react" src="assets/images/react.svg" />
          </div>
        </footer>
      </Bodywrapper>
    );
  }
}
export default ScoreCounter;

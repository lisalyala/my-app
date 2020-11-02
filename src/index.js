import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from "./Apprentice_TandemFor400_Data";

function Answer(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_q: "Press Next to begin!",
      correct: null,
      answers: null,
      num: 0,
      score: 0,
      selected: null,
      correct_choice: false
    };
  }

  parseAnswers(i) {
    var answers = data[i].incorrect.slice();
    answers.push(data[i].correct);
    shuffle(answers);
    return answers;
  }

  nextQuestion(i) {
    if (i === 10) {
      //We have reached the end of the round
      this.setState({
        current_q: "All questions completed! Click to play again :)",
        answers: null,
        num: 0,
        selected: null
      });
      shuffle(data);
      return;
    }
    if (i == 0) {
      //We are at the beginning of a round
      this.setState({
        score: 0,
      });
    }
    this.setState({
      current_q: data[i].question,
      correct: data[i].correct,
      answers: this.parseAnswers(i),
      num: i + 1,
      selected: null,
      correct_choice: false
    });
  }

  renderAnswers(choices) {
    if (!choices) {
      // If there are no answers to display
      return;
    }
    const items = [];
    for (const [index, choice] of choices.entries()) {
      let className = "answers-button";
      // Logic to color the answers red or green
      if (this.state.selected === null) {
        className += " highlight";
      } else if (this.state.correct_choice) {
        className += " correct";
      } else if (this.state.selected === choice) {
        className += " incorrect";
      } else if (this.state.correct === choice) {
        className += " correct";
      }
      items.push(
        <Answer
          className={className}
          value={choice}
          onClick={() => this.selectAnswer(choice)}
        />
      );
    }

    return <ul>{items}</ul>;
  }

  selectAnswer(choice) {
    if (this.state.selected !== null) {
      return;
    }
    if (choice === this.state.correct) {
      this.setState({
        selected: choice,
        correct_choice: true,
        score: this.state.score + 1
      });
    } else {
      this.setState({
        selected: choice
      });
    }
  }

  render() {
    let question_num = this.state.num;

    return (
      <div>
        <div> {this.state.current_q}</div>
        <p id="result"></p>
        <div>{this.renderAnswers(this.state.answers)}</div>
        <div>
          <button
            className="next-button shadow"
            onClick={() => this.nextQuestion(question_num)}
          >
            {"Next"}
          </button>
        </div>
        <div>{"Score: " + this.state.score}</div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));

// Helper function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

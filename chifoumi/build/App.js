var choices = [{ id: 1, name: "lizard", beats: [2, 4] }, { id: 2, name: "spock", beats: [3, 5] }, { id: 3, name: "scissors", beats: [4, 1] }, { id: 4, name: "paper", beats: [5, 2] }, { id: 5, name: "rock", beats: [1, 3] }];

var rounds = [];
var txp1choice = "Player 1 choice";
var txp2choice = "Player 2 choice";

function _reset() {
  console.log("reseting");
  document.querySelector("#playerChoice").innerHTML = txp1choice;
  rounds = [];
}
function _compute(rounds) {
  console.log("compute");
  var elResult = document.querySelector("#result");
  var p1c = rounds[0];
  var p2c = rounds[1];
  console.log(txp1choice + ":" + p1c);
  console.log(txp2choice + ":" + p2c);
  choices.map(function (choice) {
    var choiceid = choice.id;
    var choicename = choice.name;
    //console.log("targeting choiceid:" + choiceid + ",name:" + choicename);
    if (p1c === choiceid) {
      var beats = choice.beats;
      if (beats.includes(p2c)) {
        elResult.innerHTML = choicename + " won ";
      }
    }
    if (p2c === choiceid) {
      var beats = choice.beats;
      if (beats.includes(p1c)) {
        elResult.innerHTML = choicename + " won";
      }
    }
    if (p1c === p2c) {
      elResult.innerHTML = "draw game !";
    }
  });
}
var Choice = React.createClass({
  displayName: "Choice",

  handleClick: function (i) {
    var elpChoice = document.querySelector("#playerChoice"); // scope ?
    var id = parseInt(i.target.id);
    rounds.push(id);
    // print player 2 turn;
    elpChoice.innerHTML = txp2choice;
    if (rounds.length === 2) {
      // compute result
      _compute(rounds);
      _reset();
    }
  },
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "choice", onClick: this.handleClick.bind(this), key: this.props.id, id: this.props.id },
        this.props.name
      )
    );
  }
});

var Choices = React.createClass({
  displayName: "Choices",

  render: function () {
    /* why do I have to remap {choices} ? */
    var c = choices.map(function (choice) {
      return React.createElement(Choice, { name: choice.name, id: choice.id, key: choice.id });
    });
    return React.createElement(
      "div",
      null,
      c
    );
  }
});

var Game = React.createClass({
  displayName: "Game",

  render: function () {
    return React.createElement(
      "div",
      { className: "app" },
      React.createElement(
        "div",
        { id: "playerChoice", className: "playerChoice" },
        txp1choice
      ),
      React.createElement(
        "div",
        null,
        React.createElement(Choices, null),
        React.createElement("div", { id: "result" })
      )
    );
  }
});
ReactDOM.render(React.createElement(Game, null), document.getElementById('content'));
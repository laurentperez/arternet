var choices = [
{id: 1, name: "lizard", beats: [2,4]},
{id: 2, name: "spock", beats: [3,5]},
{id: 3, name: "scissors", beats: [4,1]},
{id: 4, name: "paper", beats: [5,2]},
{id: 5, name: "rock", beats: [1,3]}
];

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
 console.log(txp1choice + ":" + p1c)
 console.log(txp2choice + ":" + p2c)
 choices.map(function(choice) {
  var choiceid = choice.id;
  var choicename = choice.name;
    		//console.log("targeting choiceid:" + choiceid + ",name:" + choicename);
    		if(p1c === choiceid) {
    			var beats = choice.beats;
    			if(beats.includes(p2c)) {
           elResult.innerHTML = choicename + " won ";
         } 
       }
       if(p2c === choiceid) {
         var beats = choice.beats;
         if(beats.includes(p1c)) {
           elResult.innerHTML = choicename + " won";
         } 
       }
       if(p1c === p2c) {
        elResult.innerHTML = "draw game !";
      }
    })
}
var Choice = React.createClass({
	handleClick: function(i) {
  var elpChoice = document.querySelector("#playerChoice"); // scope ?
  var id = parseInt(i.target.id);
  rounds.push(id);
    // print player 2 turn;
    elpChoice.innerHTML = txp2choice;
    if(rounds.length === 2) {
    	// compute result
    	_compute(rounds);
      _reset();

    }
  },
  render: function(){
    return(
      <div>
      <div className="choice" onClick={this.handleClick.bind(this)} key={this.props.id} id={this.props.id}>{this.props.name}</div>
      </div>
      )
  }
});

var Choices = React.createClass({
	render: function() {
		/* why do I have to remap {choices} ? */
    var c = choices.map(function(choice) {
      return (
        <Choice name={choice.name} id={choice.id} key={choice.id}/>
        );
    });
    return (
    	<div>
    	{c}
      </div>
      );
  }
});

var Game = React.createClass({
  render: function() {
    return (
      <div className="app">
      <div id="playerChoice" className="playerChoice">{txp1choice}</div>
      <div>
      <Choices/>
      <div id="result"></div>
      </div>
      </div>
      );
  }
});
ReactDOM.render(
  <Game/>,
  document.getElementById('content')
  );
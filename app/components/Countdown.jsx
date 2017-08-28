var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped' // this is to maintain the current status of the timer
    };
  },
  componentDidUpdate: function (prevProps, prevState) { // this will auto-run when props or state updated
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function () {
    //setInterval tells javasript to trigger the function every certain amount of time
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({ // this is to update the state
      count: seconds,
      countdownStatus: 'started'
    });
  },
  render: function() {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/> {/* take Clock and props from Clock.jsx */}
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
        {/* the function handleSetCountdown has to be defined above */}
      </div>
    );
  }
});

module.exports = Countdown;

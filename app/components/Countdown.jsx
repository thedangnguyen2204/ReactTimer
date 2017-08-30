var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    //setInterval tells javasript to trigger the function every certain amount of time
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0)
        this.setState({countdownStatus: 'stopped'});
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({ // this is to update the state
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function() {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };
    return (
      <div>
        <h1 className="text-center page-title">Countdown App</h1>
        <Clock totalSeconds={count}/> {/* take Clock and props from Clock.jsx */}
        {/* the function handleSetCountdown has to be defined above */}
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;

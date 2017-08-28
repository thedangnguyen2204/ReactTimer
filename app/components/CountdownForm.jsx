var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (e) { // e means event
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) { // test the validation of data
      this.refs.seconds.value='';
      this.props.onSetCountdown(parseInt(strSeconds, 10)); // this function is a prop of CountdownForm
      // and it calls its parent function
      // the CountdownForm is the child of Countdown
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          {/*the function onSubmit has to be defined above */}
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          {/*the ref.seconds will be used above */}
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;

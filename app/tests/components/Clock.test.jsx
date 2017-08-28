var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it("should exist", () => {
    expect(Clock).toExist();
  });
  describe('render', () => {
    it("should render clock to the output", () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock)); // to find the element
      var actual = $el.find('.clock-text').text();

      expect(actual).toBe('01:02');
    });
  });
  describe('formatSeconds', () => {
    it("should format Seconds", () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = "10:15";
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it("should format Seconds", () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = "01:01";
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});

import React from "react";

class Dashboard extends React.Component {
  state = {
    now: new Date(),
    day: "",
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.exactTime(), 1000);
    this.setState((state) => {
      return { day: state.now.getDay() };
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  exactTime() {
    this.setState({
      now: new Date(),
    });
  }

  render() {
    let greeting = "";

    if (this.state.day === 1) {
      greeting =
        "Hey You, let's start this week off right! It's Marvelous Monday!";
    }
    if (this.state.day === 2) {
      greeting = "What's Up! It's 'ToDo' Tuesday!";
    }
    if (this.state.day === 3) {
      greeting = "Hey! It's Wednesday, Happy Hump Day!";
    }
    if (this.state.day === 4) {
      greeting = "Almost there! It's Thursday!";
    }
    if (this.state.day === 5) {
      greeting = "Hey Wonderful! It's Finally Friday!";
    }
    if (this.state.day === 6) {
      greeting = "Helllo! It's Super Saturday!";
    }
    if (this.state.day === 0) {
      greeting = "Nice to see ya! It's Easin' Sunday!";
    }
    return (
      <div className="Dashboard">
        <h2 className="greeting">{greeting}</h2>
        <h2> It is currently {this.state.now.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Dashboard;

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setstate!!!!
        this.setState({ lat: position.coords.latitude });

        // Never ever did it !!!!
        // this.state.lat = position.coords.latitude
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude:{this.state.lat}</div>;
    }

    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

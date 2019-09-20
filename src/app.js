import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Missions from "./missionQuery"
import './app.css';
const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql",
})
class App extends React.Component {
  state = {
    missionname: "",
    rocketname: "",
    launchyear: "",
    searchResults: ""
  };

  componentDidMount(){
    //Let's initially get launch results
    this.submit();
  }

  submit(clear) {
    let { missionname, rocketname, launchyear } = this.state;

    // If the user wants to clear their search, let's handle that here
    if (clear){
      missionname = "";
      rocketname = "";
      launchyear = "";
      this.setState({ missionname, rocketname, launchyear });
    }

    const searchResults = (
      <ApolloProvider client={client}>
        <div className="container">
          <Missions
            missionname={missionname}
            rocketname={rocketname}
            launchyear={launchyear}
          />
        </div>
      </ApolloProvider>
    );
    this.setState({searchResults});
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { missionname, rocketname, launchyear, searchResults } = this.state;
    return (
      <div className="app-container">
        <h1>Search SpaceX Launches By: </h1>
        <div className="form" name="submit">
          <label className="label" htmlFor="missionname">
            Mission Name:{" "}
          </label>
          <input
            className="field"
            onChange={(e)=>this.handleChange(e)}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                this.submit();
              }
            }}
            value={missionname}
            type="text"
            name="missionname"
            placeholder="COTS 1"
            id="missionname"
          />
          <label className="label" htmlFor="rocketname">
            Rocket Name:
          </label>
          <input
            className="field"
            onChange={(e)=>this.handleChange(e)}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                this.submit();
              }
            }}
            value={rocketname}
            type="text"
            name="rocketname"
            placeholder="Falcon 9"
            id="rocketname"
          />
          <label className="label" htmlFor="launchyear">
            Launch Year:{" "}
          </label>
          <input
            className="field"
            onChange={(e)=>this.handleChange(e)}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                this.submit();
              }
            }}
            value={launchyear}
            type="text"
            name="launchyear"
            placeholder="2010"
            id="launchyear"
          />
          <button
            className="button"
            type="submit"
            id="submitbutton"
            onClick={() => this.submit()}
          >
            search launches
          </button>
          <button
            className="button"
            type="submit"
            id="clearbutton"
            onClick={() => this.submit(true)}
          >
            clear searches
          </button>
        </div>
        {searchResults}
      </div>
    );
  }
}

export default App;

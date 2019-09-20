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
    launchyear: ""   
  }

  search(){
    let missionname = document.getElementById("missionname").value;
    let rocketname = document.getElementById("rocketname").value
    let launchyear = document.getElementById("launchyear").value

    this.setState({missionname, rocketname, launchyear});
  }
  clear(clear){
    document.getElementById("missionname").value = "";
    document.getElementById("rocketname").value = ""
    document.getElementById("launchyear").value = ""
    this.setState({missionname: "", rocketname: "", launchyear: ""});
  }

  render(){
    const {missionname, rocketname, launchyear} = this.state;
    return (
      <div className="app-container">
        <h1>Search SpaceX Launches By: </h1>
        <div className="form" name="submit">
          <label className="label" htmlFor="missionname">
            Mission Name:{" "}
          </label>
          <input
            className="field"
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
            type="text"
            name="launchyear"
            placeholder="2012"
            id="launchyear"
          />
          <button
            className="button"
            type="submit"
            id="submitbutton"
            onClick={() => this.search()}
          >
            search launches
          </button>
          <button
            className="button"
            type="submit"
            id="clearbutton"
            onClick={() => this.clear()}
          >
            clear searches
          </button>
        </div>
        <ApolloProvider client={client}>
          <div className="container">
            <Missions missionname={missionname} rocketname={rocketname} launchyear={launchyear} />
          </div>
        </ApolloProvider>
      </div>
    );}
}

export default App;

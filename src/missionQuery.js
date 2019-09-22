import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Mission from "./mission";
let previousResponse = null;
const Launches = props => (
  <Query
    query={gql`
          query {
            launches(
              find: {
                mission_name: "${props.missionname}",
                launch_year: "${props.launchyear}",
                rocket_name: "${props.rocketname}"
              }
            ) {
              mission_name,
              upcoming,
              rocket {
                rocket_name
              }
              launch_date_utc
              links {
                video_link
              }
            }
          }
        `}
  >
    {({ loading, error, data }) => {
      // This is a weird quirk of the library I am using-- if we
      // get the same return, the library will persist the
      // loading state so we want to catch that here!
      if (loading && previousResponse !== data)
        return <p>Good things take time....</p>;
      if (error) return <p>Something went wrong...</p>;
      previousResponse = data;
      return (
        <div className="row">
          {data.launches.length ? (
            <div>
              {data.launches.length === 1 ? (
                <p className="result-metadata">
                  {data.launches.length} Mission Found
                </p>
              ) : (
                <p className="result-metadata">
                  {data.launches.length} Missions Found
                </p>
              )}
              {data.launches.map((launch, index) => (
                <Mission key={index} launch={launch} />
              ))}
            </div>
          ) : (
            <p>Whoops! No launches found for this search!</p>
          )}
        </div>
      );
    }}
  </Query>
);

export default Launches;

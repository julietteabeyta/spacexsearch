import React from "react";

const Mission = props => (
  <div
    className="launch"
    id={props.launch.links.video_link ? "with-video" : ""}
  >
    <div className="launch-text">
      {props.launch.rocket.rocket_name}{" "}
      {props.launch.upcoming ? "departs" : "departed"}{" "}
      {props.launch.launch_date_utc.split("T")[0]} for her{" "}
      {props.launch.mission_name} mission.{" "}
    </div>
    {props.launch.links.video_link && (
      <a
        href={props.launch.links.video_link}
        rel="noopener noreferrer"
        target="_blank"
        aria-describedby="link-new-window"
        className="launch-video"
      >
        <img src={require("./play.png")} alt="play-icon" />
        watch
      </a>
    )}
    <span id="link-new-window" hidden>
      Opens in a new window
    </span>
  </div>
);

export default Mission;

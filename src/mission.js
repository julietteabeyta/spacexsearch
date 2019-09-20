
import React from 'react'

const Mission = props => (
  <div className="launch">
    {props.launch.rocket.rocket_name} departed{" "}
    {props.launch.launch_date_utc.split("T")[0]} for her{" "}
    {props.launch.mission_name} mission.{" "}
    {props.launch.links.video_link && (
      <>
        You can watch the launch{" "}
        <a
          href={props.launch.links.video_link}
          rel="noopener noreferrer"
          target="_blank"
          aria-describedby="link-new-window"
        >
          here!
        </a>
        <span id="link-new-window" hidden>
          Opens in a new window
        </span>
      </>
    )}
  </div>
);

export default Mission
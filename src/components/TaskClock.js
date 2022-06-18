import styled from "styled-components"
import { useTimer } from "reactjs-countdown-hook"
import React, { useEffect, useState } from "react"
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

import { Pause } from "@material-ui/icons"
import { PlayArrowRounded } from "@material-ui/icons"

const TaskClock = (props) => {
  function getInitialTimes(startTime) {
    let iHours = Math.floor(startTime / 3600)
    let iMinutes = Math.floor((startTime - iHours * 3600) / 60)
    let iSeconds = startTime - (3600 * iHours + 60 * iMinutes)

    if (iHours < 10) {
      iHours = "0" + iHours.toString()
    } else {
      iHours.toString()
    }
    if (iMinutes < 10) {
      iMinutes = "0" + iMinutes.toString()
    } else {
      iMinutes.toString()
    }
    if (iSeconds < 10) {
      iSeconds = "0" + iSeconds.toString()
    } else {
      iSeconds.toString()
    }

    return [iSeconds, iMinutes, iHours]
  }

  const [initalSeconds, initialMinutes, initialHours] = getInitialTimes(
    props.startTime
  )

  const { isActive, counter, seconds, minutes, hours, pause, resume } =
    useTimer(props.startTime, handleTimerFinish)

  var radius = parseFloat(props.radius)
  var relCenter = parseFloat(props.center) - radius
  const [percentage, setPercentage] = useState(100)

  function calculatePosition() {
    const theta = (props.index / props.count) * 2 * Math.PI
    var x = props.center + relCenter * Math.cos(theta) - radius
    var y = props.center - relCenter * Math.sin(theta) - radius
    return [x, y]
  }

  function handleTimerFinish() {
    alert("times up!")
  }

  useEffect(() => {
    if (props.activeTimer !== props.index) {
      pause()
    } else {
      setPercentage(100 * (counter / props.startTime))
    }
  }, [
    props.startTime,
    props.activeTimer,
    props.index,
    percentage,
    counter,
    pause,
    resume,
  ])

  const [xPosition, yPosition] = calculatePosition(radius)

  return (
    <Face
      id={props.index}
      circ={(radius * 2).toString() + "px"}
      x={xPosition.toString() + "px"}
      y={yPosition.toString() + "px"}
      onClick={
        isActive
          ? () => pause()
          : () => {
              resume()
              props.setActiveTimer(props.index)
            }
      }
    >
      <CircularProgressbarWithChildren
        value={seconds ? 100 * (seconds / 60) : 100 * (initalSeconds / 60)}
        strokeWidth={7}
        styles={buildStyles({
          strokeLinecap: "butt",
          trailColor: "white",
          pathColor: `${props.color}`,
          textSize: "12",
          textColor: "black",
          boxShadow: "1px 1px 1px 1px gray",
        })}
      >
        <div style={{ width: "84%" }}>
          <CircularProgressbarWithChildren
            strokeWidth={7}
            value={minutes ? 100 * (minutes / 60) : 100 * (initialMinutes / 60)}
            styles={buildStyles({
              strokeLinecap: "butt",
              trailColor: "transparent",
              pathColor: "#0DB39E",
            })}
          >
            <div style={{ width: "84%" }}>
              <CircularProgressbarWithChildren
                strokeWidth={7}
                value={hours ? 100 * (hours / 24) : 100 * (initialHours / 24)}
                styles={buildStyles({
                  trailColor: "transparent",
                  strokeLinecap: "butt",
                  pathColor: "#F1C453",
                })}
              >
                <div
                  style={{
                    fontSize: 20,
                    marginTop: -5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <strong>{props.taskTitle}</strong>
                  <strong>{`${hours ? hours : initialHours}:${
                    minutes ? minutes : initialMinutes
                  }:${seconds ? seconds : initalSeconds}`}</strong>
                  {isActive ? <Pause /> : <PlayArrowRounded />}
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </CircularProgressbarWithChildren>
    </Face>
  )
}

export default TaskClock

const Face = styled.div`
  display: flex;
  width: ${(props) => props.circ};
  height: ${(props) => props.circ};
  position: absolute;
  left: ${(props) => props.x};
  top: ${(props) => props.y};
  transform: rotateZ(90deg);
  cursor: pointer;
`

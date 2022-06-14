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
    percentage,
    counter,
    props.startTime,
    props.activeTimer,
    props.index,
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
        value={percentage}
        strokeWidth={15}
        styles={buildStyles({
          strokeLinecap: "butt",
          trailColor: "white",
          pathColor: `${props.color}`,
          textSize: "12",
          textColor: "black",
          boxShadow: "1px 1px 1px 1px gray",
        })}
      >
        {
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
            <strong>{`${hours}:${minutes}:${seconds}`}</strong>
            {isActive ? <Pause /> : <PlayArrowRounded />}
          </div>
        }
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

  onhover: ;
`

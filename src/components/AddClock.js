import styled from "styled-components"
import { useTimer } from "reactjs-countdown-hook"
import React, { useEffect, useState } from "react"
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import CircularSlider from "@fseehawer/react-circular-slider"
import CircularSliderRange from "../extraComponents/CircularSliderRange"

function AddClock({ setTaskData, timerRadius, boxCenter }) {
  const size = 2 * boxCenter - 4 * timerRadius - 20

  console.log(document.querySelector("#drawSlider"))

  const exampleOptions = {
    DOMselector: "#drawSlider",
    sliders: [
      {
        radius: 10,
        min: 2,
        max: 9,
        step: 10,
        initialValue: 0,
        color: "rgb(190, 221, 156, .6)",
        displayName: "Example Name",
      },
    ],
  }

  const newSlider = new CircularSliderRange(exampleOptions)
  newSlider.draw()

  return (
    <Clock modHeight={size.toString() + "px"} modWidth={size.toString() + "px"}>
      <CircularSlider
        hideKnob
        width={size}
        progressLineCap={"flat"}
        // trackColor={"rgb(35, 180, 10, .55)"}
        // knobDraggable={true}
        // label={""}
      ></CircularSlider>
      {/* <CircularProgressbarWithChildren
        strokeWidth={5}
        styles={buildStyles({
          strokeLinecap: "butt",
          trailColor: "white",
          pathColor: "rgb(150, 80, 10,  .55)",
          textSize: "12",
          textColor: "black",
          boxShadow: "1px 1px 1px 1px gray",
        })}
      >
        <div>Add Clock</div>
      </CircularProgressbarWithChildren> */}
    </Clock>
  )
}

export default AddClock

const Clock = styled.div`
  position: relative;
  display: flex;
  margin: auto auto;
  transform: rotateZ(90deg);
  // height: 200px;
  // width: 200px;
  // height: ${(props) => props.modHeight};
  // width: ${(props) => props.modWidth};
`

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
        radius: 160,
        min: 0,
        max: 60,
        step: 1,
        initialValue: 10,
        color: "#0984e3",
        displayName: "Seconds",
      },
      {
        radius: 100,
        min: 0,
        max: 60,
        step: 1,
        initialValue: 10,
        color: "#fdcb6e",
        displayName: "Minutes",
      },
      {
        radius: 40,
        min: 0,
        max: 6,
        step: 1,
        initialValue: 1,
        color: "#d63031",
        displayName: "Hours",
      },
    ],
  }

  const newSlider = new CircularSliderRange(exampleOptions)
  newSlider.draw()

  return (
    <Clock
      modHeight={size.toString() + "px"}
      modWidth={size.toString() + "px"}
    ></Clock>
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

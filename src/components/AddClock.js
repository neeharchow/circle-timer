import styled from "styled-components"
import React, { useEffect, useState } from "react"
import {
	buildStyles,
	CircularProgressbarWithChildren,
} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
// import CircularSlider from "@fseehawer/react-circular-slider"
import TextField from "@mui/material/TextField"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"

function AddClock({ setTaskData, timerRadius, boxCenter }) {
	const size = 2 * boxCenter - 4 * timerRadius - 20

	const [timerTitle, setTimerTitle] = useState("")
	const [timerHours, setTimerHours] = useState(8)
	const [timerMinutes, setTimerMinutes] = useState(50)
	const [timerSeconds, setTimerSeconds] = useState(30)

	return (
		<Clock modHeight={size.toString() + "px"} modWidth={size.toString() + "px"}>
			<CircularProgressbarWithChildren
				strokeWidth={7}
				value={(100 * timerHours) / 24}
				styles={buildStyles({
					strokeLinecap: "butt",
					trailColor: "white",
					pathColor: "#2C699A",
					textSize: "12",
					textColor: "black",
					boxShadow: "1px 1px 1px 1px gray",
				})}
			>
				<div style={{ width: "84%" }}>
					<CircularProgressbarWithChildren
						strokeWidth={7}
						value={(100 * timerMinutes) / 60}
						styles={buildStyles({
							strokeLinecap: "butt",
							trailColor: "transparent",
							pathColor: "#0DB39E",
						})}
					>
						<div style={{ width: "84%" }}>
							<CircularProgressbarWithChildren
								strokeWidth={7}
								value={(100 * timerSeconds) / 60}
								styles={buildStyles({
									strokeLinecap: "butt",
									trailColor: "transparent",
									pathColor: "#F1C453",
								})}
							>
								<AddClockInput>
									<TextField
										value={timerTitle}
										onChange={(e) => {
											setTimerTitle(e.target.value)
										}}
										placeholder="Task Name"
										sx={{ m: 1, width: "24ch" }}
										variant="outlined"
									/>
									<div style={{ display: "flex", flexDirection: "row" }}>
										<TextField
											error={timerHours > 24 || timerHours < 0 ? true : false}
											value={timerHours}
											onChange={(e) => {
												setTimerHours(e.target.value)
											}}
											helperText="Hours"
											id="filled-start-adornment"
											sx={{ m: 1, width: "7ch" }}
											type="number"
											variant="outlined"
											InputProps={{
												inputProps: {
													max: 24,
													min: 0,
												},
											}}
										/>
										<TextField
											error={
												timerMinutes > 60 || timerMinutes < 0 ? true : false
											}
											value={timerMinutes}
											onChange={(e) => {
												setTimerMinutes(e.target.value)
											}}
											helperText="Minutes"
											id="filled-start-adornment"
											sx={{ m: 1, width: "7ch" }}
											type="number"
											variant="outlined"
											InputProps={{
												inputProps: {
													max: 60,
													min: 0,
												},
											}}
										/>
										<TextField
											error={
												timerSeconds > 60 || timerSeconds < 0 ? true : false
											}
											value={timerSeconds}
											onChange={(e) => {
												setTimerSeconds(e.target.value)
											}}
											helperText="Seconds"
											id="filled-start-adornment"
											sx={{ m: 1, width: "7ch" }}
											type="number"
											variant="outlined"
											InputProps={{
												inputProps: {
													max: 60,
													min: 0,
												},
											}}
										/>
									</div>
								</AddClockInput>
							</CircularProgressbarWithChildren>
						</div>
					</CircularProgressbarWithChildren>
				</div>
			</CircularProgressbarWithChildren>
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

const AddClockInput = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transform: scale(0.8);
`

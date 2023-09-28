import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
	name,
	age,
	slot,
} from '../store/chatSlice'

function Summary() {
	const navigate = useNavigate()

	const nameText = useSelector(name)
	const ageText = useSelector(age)
	const slotValue = useSelector(slot)
	let slotText = null

	if (slotValue !== null) {
		slotText = `${slotValue.date} ${slotValue.month} ${slotValue.day}, ${slotValue.hour} ${slotValue.meridian}`
	}

	/*
		redirect to home if 
		enrollent is not complete
	*/
	useEffect(() => {
		if (
			nameText === null ||
			ageText === null ||
			slotText === null
		) {
			navigate('/')
		}
	}, [nameText, ageText, slotText])

	const Details = () => {
		return <div>
			<div className="text-2xl my-4">
				Done!
			</div>
			<div>
				Your name is <span className="font-bold text-green-700">{nameText}</span>, aged	<span className="font-bold text-green-700">{ageText} </span> has been added to student system.
			</div>
			<div>
				Your slot is booked at <span className="font-bold text-green-700">{slotText}</span>.
			</div>
			<div>
				You may exit now.
			</div>
		</div>
	}

	return <Details />
}

export default Summary
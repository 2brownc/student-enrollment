import React, {
	useState,
	useEffect,
	useMemo
} from 'react'
import {
	addDays,
	setHours,
	format,
	isSameHour,
} from 'date-fns'

import { useDispatch } from 'react-redux'
import {
	setSlot,
	setCurrentInput,
} from '../store/chatSlice'

import { clsx } from 'clsx';

function SlotPicker({ actions }) {
	const dispatch = useDispatch()

	// use present date as the pivot
	const currentDate = new Date()

	// store date selected
	const [selectedDateSlot, setSelectedDateSlot] = useState(null)
	// store hour selected
	const [selectedHourSlot, setSelectedHourSlot] = useState(null)

	/*
		date slots can be scrolled
		3 slots are visible at a time
		slot1: visible - 1
		slot2: visible
		slot3: visible + 1
	*/
	const [visible, setVisible] = useState(1)

	/*
		show the date picker
		but once date is picked
		show the summary
		eg: 15 May, Mon 11:00 AM
	*/
	const [showPicker, setShowPicker] = useState(true)

	useEffect(() => {
		if (selectedHourSlot !== null) {
			/*
				once the date time slot is picked
				hide the picker`
			*/
			setShowPicker(false)

			// set the type of input for redux store
			dispatch(setCurrentInput("slot"))
			// send selected date slot to the store
			const dateText = format(selectedHourSlot, 'dd')
			const monthText = format(selectedHourSlot, 'MMM')
			const dayText = format(selectedHourSlot, 'E')
			const hourText = format(selectedHourSlot, 'h')
			const meridianText = format(selectedHourSlot, 'aaa')
			const slot = {
				date: dateText,
				month: monthText,
				day: dayText,
				hour: hourText,
				meridian: meridianText
			}
			dispatch(setSlot(slot))

			//print summary of selected datetime slot
			const summaryText = format(selectedHourSlot, 'dd MMM, E hh:00 aaa')
			actions.printDateSlotSummary(summaryText)
		}
	}, [selectedHourSlot])


	const DateOption = ({ id, days }) => {
		const [show, setShow] = useState(false);
		const [selected, setSelected] = useState(false)

		const date = addDays(currentDate, days)

		/*
			date scroller: only 3 dates are visible at a time.
			dates are scrolled using "left" and "right" buttons
			which set the value of "visible" which is the pivot
		*/
		const isVisible = () => {
			if (
				id === visible - 1 ||
				id === visible ||
				id === visible + 1
			) {
				setShow(true)
			} else {
				setShow(false)
				// invisible date slot can't be selected
				setSelected(false)
				return false
			}
		}

		// if a date slot is selected it is highlighted
		const isSelected = () => {
			if (isSameHour(selectedDateSlot, date)) {
				setSelected(true)
			} else {
				setSelected(false)
			}
		}

		useMemo(isVisible, [visible])
		useMemo(isSelected, [selectedDateSlot])

		// eg: 27
		const dateText = format(date, 'dd')

		// eg: Sep
		const monthText = format(date, 'MMM')

		// eg: Thu
		const dayText = format(date, 'E')


		return show && <div
			key={id}
			className={`
				m-1 h-18 w-12
				rounded
				active:bg-violet-600 hover:bg-violet-400
				${clsx({
				"bg-violet-500": selected,
				"bg-violet-200": !selected,
				"text-white": selected,
				"text-black": !selected,
			})}
		`}>
			<div
				className="
					p-1 w-full w-full
					flex flex-col items-center
					select-none
				"
				onClick={() => setSelectedDateSlot(date)}
			>
				<div>
					{`${dateText}`}
				</div>
				<div>
					{`${monthText}`}
				</div>
				<div>
					{`${dayText}`}
				</div>
			</div>
		</div>
	}

	const TimeOption = ({ hour }) => {
		if (selectedDateSlot === null) return null

		const [selected, setSelected] = useState(false)

		const currentHourSlot = setHours(selectedDateSlot, hour)

		// if a date slot is selected it is highlighted
		const isSelected = () => {
			setSelected(false)

			if (selectedHourSlot !== null) {
				if (isSameHour(selectedHourSlot, currentHourSlot)) {
					setSelected(true)
				}
			}
		}

		useMemo(isSelected, [selectedHourSlot])

		const timeText = format(currentHourSlot, 'hh:00 aaa')

		return <div
			key={hour}
			className={`
				w-fit h-fit m-1 p-2
				rounded
				active:bg-purple-600 hover:bg-purple-400
				${clsx({
				"bg-purple-500": selected,
				"bg-purple-200": !selected,
				"text-white": selected,
				"text-black": !selected,
			})}`}
			onClick={() => setSelectedHourSlot(currentHourSlot)}
		>
			{`${timeText}`}
		</div>
	}

	const Picker = () => {
		/*
			total number of days 
			available to pick
		*/
		const TOTAL_DAYS = 7
		const days = Array.from({ length: TOTAL_DAYS }, (v, i) => i)

		const MORNING_HOURS = [9, 10, 11, 12]
		const AFTERNOON_HOURS = [13, 14, 15, 16]
		const EVENING_HOURS = [18, 19, 20, 21]

		/*
			three days are show in the date picker
			date1: visible - 1
			date2: visible
			date3: visible + 1
		*/


		const inc = () => {
			if (visible < TOTAL_DAYS - 1)
				setVisible(prev => prev + 1)
		}
		const dec = () => {
			if (visible > 2)
				setVisible(prev => prev - 1)
		}

		const Scroller = ({ symbol, action }) => {
			return <button
				onClick={action}
				className="
				flex-item
				m-1 w-5 h-18
				rounded
				active:bg-purple-600 hover:bg-purple-400 bg-purple-500
				text-white
			">
				{symbol}
			</button>
		}



		return <div className="
				border border-solid border-black
				p-2
				duration-150
			">
			<div className="
				flex flex-row justify-between
			">
				<Scroller symbol={"<"} action={dec} />
				<div className="
					flex
				">
					{days.map(i => (
						<DateOption id={i} days={i} />
					))}
				</div>
				<Scroller symbol={">"} action={inc} />
			</div>
			{selectedDateSlot !== null && <div className="">
				<div className="flex flex-col items-center">
					<div className="">
						Morning
					</div>
					<div className="
						timeSlots flex flex-wrap justify-center
					">
						{MORNING_HOURS.map((hour) => (
							<TimeOption hour={hour} />
						))}
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="">
						Afternoon
					</div>
					<div className="
						timeSlots flex flex-wrap justify-center
					">
						{AFTERNOON_HOURS.map((hour) => (
							<TimeOption hour={hour} />
						))}
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="">
						Evening
					</div>
					<div className="
						timeSlots flex flex-wrap justify-center
					">
						{EVENING_HOURS.map((hour) => (
							<TimeOption hour={hour} />
						))}
					</div>
				</div>
			</div>}
		</div>
	}



	return showPicker && <Picker />
}

export default SlotPicker

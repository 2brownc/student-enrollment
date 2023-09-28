import React from 'react'
import { Link } from "react-router-dom"

function Home() {
	const RegisterButton = () => {
		return <Link
			className="text-white"
			to={'/register'}
		>
			<span
				className="
			    bg-blue-500 hover:bg-blue-700 duration-150
			    active:bg-blue-900
			    text-white font-bold
			    py-2 px-4 rounded
			">
				Register
			</span>
		</Link>
	}

	return <RegisterButton />
}

export default Home

import React, { useState } from 'react'

function GotIt({ actions }) {
  const [show, setShow] = useState(true);

  const clickAction = () => {
    actions.handleGotIt()
    setShow(false);
    actions.askSlotMessage();
  }

  const GotItButton = () => <button
    onClick={clickAction}
    className="
    bg-blue-500 hover:bg-blue-700 duration-150
    active:bg-blue-900
    text-white font-bold
    py-2 px-4 rounded
  ">
    Got It!
  </button>

  return show && <div className="
      flex justify-center w-full
    ">
    <GotItButton />
  </div>
}

export default GotIt
import React, { useState } from 'react'

function GotIt({ actions }) {
  const [show, setShow] = useState(true);

  const clickAction = () => {
    actions.handleGotIt()
    setShow(false);
  }

  const GotItButton = () => <button
    onClick={clickAction}
  >
    Got It!
  </button>

  return show && <GotItButton />;
}

export default GotIt
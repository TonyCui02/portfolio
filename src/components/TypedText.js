import React from 'react'
import Typed from 'typed.js'

const TypedText = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      strings: [
        "&lt; Software Dev /&gt;",
        "&lt; Hiker /&gt;",
        "&lt; Pencil Artist /&gt;",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: '_',
      shuffle: true,
      smartBackspace: false,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])

  return (
    <div className="wrap">
      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
    </div>
  )
}

export default TypedText

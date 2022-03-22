import { useEffect, useRef, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

const ModalPortal = forwardRef(({ setVisible, children }, ref) => {
  useEffect(() => {
    const handleEsc = (evt) => {
      if (evt.code !== 'Escape') return
      setVisible(false)
    }

    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return createPortal(
    <div className="modal" ref={ref}>
      <div className="overlay" onClick={() => setVisible(false)}></div>
      <div className="content">{children}</div>
    </div>,
    document.getElementById('modal-root')
  )
})

const Modal = ({ visible, ...props }) => {
  const ref = useRef()

  return (
    <CSSTransition
      in={visible}
      addEndListener={(done) => {
        ref.current.addEventListener('transitionend', done, false)
      }}
      classNames="modal"
      nodeRef={ref}
      unmountOnExit
    >
      <ModalPortal ref={ref} {...props} />
    </CSSTransition>
  )
}

export default Modal

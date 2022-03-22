import { useState } from 'react'
import Modal from './components/Modal'

const App = () => {
  const [active, setActive] = useState(false)

  return (
    <div>
      <h1>Modal</h1>

      <button onClick={() => setActive((prev) => !prev)}>Open modal</button>

      <Modal visible={active} setVisible={setActive}>
        <h2>Modal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea
          fuga eaque rerum porro. Hic vitae quis minima aliquam. Eius inventore
          doloribus quas suscipit nemo harum aspernatur optio, voluptas neque!
        </p>
      </Modal>
    </div>
  )
}

export default App

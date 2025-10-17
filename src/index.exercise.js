// 🐨 you'll need to import react and createRoot from react-dom up here
import * as React from 'react'
import {createRoot} from 'react-dom/client'

// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'
import Dialog from '@reach/dialog'
import '@reach/dialog/styles.css'
// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

function LoginForm({onSubmit, buttonText}) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        const {username, password} = event.target.elements
        onSubmit({
          username,
          password,
        })
      }}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>

      <button type="submit">{buttonText}</button>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = React.useState('none')
  function handleLogin() {
    setOpenModal('login')
  }

  function handleRegister() {
    setOpenModal('register')
  }

  function handleSubmit(formData) {
    console.log('login', formData)
  }
  return (
    <div>
      <Logo />
      <h1>Bookshelf</h1>
      <span>
        <button onClick={handleLogin}>Login</button>
        <Dialog isOpen={openModal === 'login'} aria-labelledby="modal-header">
          <button onClick={() => setOpenModal('none')}>Close</button>
          <h2 id="modal-header">Login</h2>
          <LoginForm buttonText="Login" onSubmit={handleSubmit} />
        </Dialog>
      </span>
      <span>
        <button onClick={handleRegister}>Register</button>
        <Dialog
          isOpen={openModal === 'register'}
          aria-labelledby="modal-header"
        >
          <button onClick={() => setOpenModal('none')}>Close</button>
          <h2 id="modal-header">Register</h2>
          <LoginForm buttonText="Register" onSubmit={handleSubmit} />
        </Dialog>
      </span>
    </div>
  )
}

// 🐨 use createRoot to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const anotherElement = (
  <a href="http://gogle.com" target = '_blank'>visit google</a>
)

const anotheruser = "chai aur react"
const reactElement  = React.createElement(
  'a',
  {href: 'https://google.com', target: '_balnk'},
  'click me to visit googel',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
)

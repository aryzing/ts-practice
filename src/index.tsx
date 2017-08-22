import React from 'react'
import ReactDOM from 'react-dom'

import IndexGreeter from './SpecialGreeterIndex'
import MainGreeter from './SpecialGreeterMain'

function greeter(greetee: string) {
  console.log(`Hello, ${greetee}!`)
}

greeter('World')

IndexGreeter('Planet')

MainGreeter('Sun')

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

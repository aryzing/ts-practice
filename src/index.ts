import IndexGreeter from './SpecialGreeterIndex'
import MainGreeter from './SpecialGreeterMain'

function greeter(greetee: string) {
  console.log(`Hello, ${greetee}!`)
}

greeter('World')

IndexGreeter('Planet')

MainGreeter('Sun')

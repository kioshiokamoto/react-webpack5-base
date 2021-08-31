import './styles.css'
import Image from './react.png'
import ImageTwo from './react-1.svg'
export default function App() {
  return (
    <div>
      <h1>
        React y webpack5 template - {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={Image} alt="React 1" />
      <img src={ImageTwo} alt="React 2" width="300" />
    </div>
  )
}

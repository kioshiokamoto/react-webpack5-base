import "./styles.css";
import Image from "./react.png";
import ImageTwo from "./react-1.svg";
export default function App() {
    return (
        <div>
            <h1>React y webpack5 template</h1>
            <img src={Image} alt="React image" />
            <img src={ImageTwo} alt="React image" width="300" />
        </div>
    );
}

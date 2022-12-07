import { useState } from "react";
import "./Ticket.scss";

const Ticket = (props) => {
  const [score, setScore] = useState(0);

  const handleIncrement = () => {
    setScore(score + 1);
  };

  const handleDecrement = () => {
    setScore(score - 1);
    if (score <= 0) {
      setScore(0);
    }
  };

  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <h2>Role: {props.role}</h2>
      <div className="card__counterContainer">
        <h2>Counter</h2>
        {score && <h2>{score}</h2>}
        <div className="card__buttonContainer">
          <div onClick={handleDecrement} className="decrementButtonContainer">
            <button className="card__button card__minusButton">-</button>
          </div>
          <div onClick={handleIncrement} className="incrementButtonContainer">
            <button className="card__button card__plusButton">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;

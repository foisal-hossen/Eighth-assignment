import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="question-container">
      <div className="questions">
        <h2>1. How does React work?</h2>
        <p>
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props. It's possible
          to have as many components as necessary without cluttering your code.
        </p>
        <h2>2. What is difference between props and state?</h2>
        <p>
          Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and cannot
          be passed to other components.
        </p>
        <h2>3. What are the uses of useEffect except Api data load?</h2>
        <p>
          The useEffect Hook allows to perform side effects in the
          components.The example of side effects are directly updating the DOM,
          and timers. useEffect accepts two arguments. (i)function
          (ii)dependency. It keeps counting even though it should only count
          once. useEffect runs on every render. That means that when the count
          changes, a render happens, which then triggers another effect.
        </p>
      </div>
    </div>
  );
};

export default Questions;

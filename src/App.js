import './App.css';

import data from './data';

function App() {
  return (
    <div className="container">
      <div className = "main-body">
        <h1>LEETCODE SOLUTIONS</h1>
        <p>By Kevin Su</p>
        <h2>Array/Hash Maps</h2>
        {data.arrHashMap.map(question => {return (
          <p>{question.name} {question.difficulty}</p>
        )})}
        <h2>Two Pointers</h2>
        {data.twoPointers.map(question => {return (
          <p>{question.name} {question.difficulty}</p>
        )})}
        <h2>Sliding Window</h2>
        <h2>Stacks</h2>
        <h2>Binary Search</h2>
        <h2>Linked List</h2>
        <h2>Trees</h2>
        <h2>Tries</h2>
        <h2>Heap/Priority Queue</h2>
        <h2>Backtracking</h2>
        <h2>Graphs</h2>
        <h2>Advanced Graphs</h2>
        <h2>1D DP</h2>
        <h2>2D DP</h2>
        <h2>Greedy</h2>
        <h2>Intervals</h2>
        <h2>Math and Geometry</h2>
        <h2>Bit Manipulation</h2>
        <p>Inspired by <a href="https://neetcode.io/" target="_blank" >Neetcode</a></p>
      </div>
    </div>
  );
}

export default App;

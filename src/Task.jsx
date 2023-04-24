import { useState } from "react";

export function Task(props) {
  return (
    <li className={props.completed && "completed"}>
      {props.text}
      <button
        className="complete-button"
        onClick={() => props.handleComplete(props.id)}
      >
        ✓
      </button>
      <button
        className="delete-button"
        onClick={() => props.handleDelete(props.id)}
      >
        X
      </button>
    </li>
  );
}

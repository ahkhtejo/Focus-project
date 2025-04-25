import React, { useState } from "react";

export default function Teask(props) {
  const [isDone, setisDone] = useState(false);

  function UpdateStatus() {
    setisDone(!isDone);
  }

  return (
    <>
      <div className=" rounded-sm border ps-1 border-cyan-500 hover:bg-blue-700 border-l-18 mb-2">
        <div>
          <div className="flex items-baseline justify-baseline ">
            <input
              onClick={UpdateStatus}
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="link-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <h4
                className={` text-2xl mb-2  ${
                  isDone ? "line-through text-gray-500" : ""
                }`}
              >
                {" "}
                {props.Name}
              </h4>
            </label>
          </div>
        </div>
        <p className=" text-sm text-gray-400">{props.Description}</p>
      </div>

      {/* <Status></Status> */}
    </>
  );
}

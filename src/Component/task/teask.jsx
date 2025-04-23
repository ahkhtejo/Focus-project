import React from "react";

export default function Teask(props) {
  return (
    <>
      <div className=" rounded-sm border ps-1 border-cyan-500 border-l-18 mb-2">
        <div>
          <div class="flex items-baseline justify-baseline ">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="link-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <h4 className=" text-2xl mb-2 "> {props.Name}</h4>
            </label>
          </div>
        </div>
        <p className=" text-sm text-gray-400">{props.Description}</p>
      </div>

      {/* <Status></Status> */}
    </>
  );
}

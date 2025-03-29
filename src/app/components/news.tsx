"use client";

import { MouseEvent, useReducer } from "react";
import { sendGAEvent } from "@next/third-parties/google";

import Link from "next/link";
import {newsItems} from "@/components/newsItems"

function reducer(state, action) {
    switch (action.type) {
        case "news":
            return newsItems.news.component;
        case "events":
            return newsItems.events.component;
        case "other":
            return newsItems.other.component;
        default:
            return false;
    }
}

export const News = () => {
  const [state, dispatch] = useReducer(reducer, newsItems.news.component);

  return (
    <div className="mt-10" id="news">
        <h1 className="mb-4 dark:text-white text-lg font-bold">News</h1>
        <div className="bg-lightBlue dark:bg-black rounded-lg rounded-e-lg h-[400px] overflow-y-scroll">
        <div className="terminal-header rounded-t-lg bg-darkBlue dark:bg-[#2d2c29] flex sticky gap-4 top-0 z-10 p-2">
            <div className="grid grid-cols-3 content-center">
                <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-[#e9685c] mr-2 relative hover:after:content-['\0078'] after:absolute after:top-[-25%] after:left-[22%]"></div>
                <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-[#f5be4f] mr-2 relative hover:after:content-['\2578'] after:absolute after:bottom-[-18%] after:right-[5%]"></div>
                <div className="h-[1rem] w-[1rem] rounded-[1rem] bg-[#61c554] relative hover:after:content-['\02D0'] after:absolute after:right-[30%] after:bottom-[-15%]"></div>
            </div>
            <div className="grow-1 flex justify-end space-x-2 dark:text-white text-black">
                <button onClick={() => dispatch({ type: "news" })}>News</button>
                <button onClick={() => dispatch({ type: "events" })}>Events</button>
                <button onClick={() => dispatch({ type: "other" })}>Other</button>
            </div>
        </div>
        <div className="content p-6 dark:text-white leading-8">
            {state}
        </div>
        </div>
    </div>
  )
};

import React from "react";

export const About = () => {
  const a:string[] = []

  console.log(a)

  const fnc = () => {
    a.push("test")
  }

  return<button onClick={()=> fnc()}>click</button>
}
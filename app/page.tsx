"use client";
import React from "react";
import { useState } from "react";

const Child_1 = React.memo(() => {
  return (
    <>
      <p>Child_1コンポーネントです。</p>
    </>
  );
});

const Child_2 = () => {
  return (
    <>
      <p>Child_2コンポーネントです。</p>
    </>
  );
};

export default function Parent() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      {/* <p>親コンポーネントです！</p> */}
      <input type="text" onChange={handleChange} value={text} className="border-2 border-gray-900" />
      <Child_1 />
      <Child_2 />
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container container-sm p-1">
      {" "}
      <h1 className="title text-center text-darkGreen">ChatGPT App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <a href="">😁</a>
          <label htmlFor="">Chatbot</label>
          <input
            className="shadow-sm"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={handlePrompt}
          />
          <button className="btn btn-accept w-100" type="submit">
            {" "}
            Search 🔎
          </button>
        </div>{" "}
      </form>
      <div className="bg-darkGreen  mt-2 p-1 border-5">
        <p className="text-light">
          {response ? response : "Hi I am your chatbot what can I do for you?"}
        </p>
      </div>
    </div>
  );
}

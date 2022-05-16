
import React, { useState} from "react";

const About = () => {
  const [message, setMessage] = useState();
  const handlerEvent = async () =>{ // 宣告一個非同步函式
    const res = await fetch('/api/hello')
    const data = await res.json();
    console.log(data)
    console.log(useState)
    setMessage(JSON.stringify(data, {}, 4))//將物件變成json
  }
  const btn_click = async (event) => {
    await handlerEvent()
  }
  return(
    <>
      <h1>About</h1>
      <hr/>
      <div className="p-3">
        <button type="button" className="btn btn-primary" onClick={(e) => btn_click(e)}>Primary</button>
        <pre>
          {message}
        </pre>
      </div>
    </>
  )

}

export  default About;
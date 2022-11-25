import React, { useState } from "react";
const replyform = [
  {
    id:1,
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    correct:"",
  },
  {
    id:1,
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    correct:"",
  },
  {
    id:1,
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    correct:"",
  },
  {
    id:1,
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    correct:"",
  },
];
const optionnumber = [
  {
    id:1, text:"Enter option 1",
  },
  {
    id:2, text:"Enter option 2",
  },
  {
    id:3, text:"Enter option 3",
  },
  {
    id:4, text:"Enter option 4",
  },
  {
    id:5, text:"Enter correct option number",
  },

];

const Quesform = () => {
  const [qid, setqid] = useState(1);
  const [oid, setoid] = useState(1);
  const [op, setop] = useState(4);
  return (
    <>
      <div className="quesform1">
        <div className="quesform1__wrapper">
          <form action="submit" className="quesform">
            {op>=1 ?
            <>
            <div className="ques">
              <label htmlFor="textarea" className="ques">
                Enter question {qid}
              </label>
              <input type="text" className="textarea" placeholder="Enter the question"/>
            </div>
            {optionnumber.map((o)=>(
            <div className="opt">
              <label htmlFor="option">{`${o.text}`}</label>
              <input type="text" className="option" placeholder={`${o.text}`}/>
            </div>
            ))}
            </> : <p>hello</p>
            }
            <div className="submit">
              <button className="submit"
              onClick = {(e)=>{
                e.preventDefault();
                setqid(qid+1);
                setop(op-1);
              }}
              >
                Submit Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Quesform;

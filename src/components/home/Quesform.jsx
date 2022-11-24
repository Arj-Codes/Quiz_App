import React, { useState } from "react";

const Quesform = () => {
  const [qid, setqid] = useState(1);
  const [oid, setoid] = useState(1);
  return (
    <>
      <div className="quesform1">
        <div className="quesform1__wrapper">
          <form action="submit" className="quesform">
            <div className="ques">
              <label htmlFor="textarea" className="ques">
                Enter question {qid}
              </label>
              <input type="text" className="textarea" />
            </div>
            <div className="opt">
              <label htmlFor="option">Enter option {oid}</label>
              <input type="text" className="option" />
            </div>
            <div className="submit">
              <button className="submit"
              onClick = {(e)=>{
                e.preventDefault();
                setqid(qid+1);
              }}
              >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Quesform;

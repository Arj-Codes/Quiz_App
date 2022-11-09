import React, { useState } from "react";
const questions = [
  {
    id: 1,
    question:
      "Which of the following is used in React.js to increase performance?",
    options: [
      { q: 1, text: "Virtual DOM",},
      { q: 2, text: "Original DOM",},
      { q: 3, text: "Both of the above",},
      { q: 4, text: "None of the above",},
    ],
    selected: 0,
    isCorrect:1,
  },

  {
    id: 2,
    question: "What is ReactJS?",
    options: [
      { q: 1, text: "Server-Side Framework",},
      { q: 2, text: "User Interface Framework",}, //correct
      { q: 3, text: "Both of the above",},
      { q: 4, text: "None of the above",},
    ],
    selected: 0,
    isCorrect:2,
  },
  {
    id: 3,
    question: "What is Babel?",
    options: [
      { q: 1, text: "JaveScript Compiler",}, //correct
      { q: 2, text: "JaveScript Interpreter",},
      { q: 3, text: "JavaScript Transpiler",},
      { q: 4, text: "None",},
    ],
    selected: 0,
    isCorrect:1,
  },
  {
    id: 4,
    question:
      "Identify the one which is used to pass data to components from outside",
    options: [
      { q: 1, text: "Render with arguments",},
      { q: 2, text: "setState",},
      { q: 3, text: "PropTypes",},
      { q: 4, text: "props",}, //correct
    ],
    selected: 0,
    isCorrect:4,
  },
];
const About = () => {
  const [show, setShow] = useState(true);
  const [done, setDone] = useState(0);
  const [qid, setqid] = useState(1);
  const [score, setscore] = useState(0);

  const handleqid = (a) => {
    if (a === "0") {
      if (qid === questions.length) {
        setqid(1);
        return;
      }
      setqid(qid + 1);
    } else if (a === "1") {
      if (qid === 1) {
        setqid(questions.length);
        return;
      }

      setqid(qid - 1);
    }
  };

  const handleScore = (o,q) => {
    if(q.selected===0){
    console.log("0");
    if (q.isCorrect ===o.q) {
      setscore(score + 1);
      if (qid === questions.length) {
        setqid(1);
        return;
      }
      setqid(qid + 1);
    } else {
      if (qid === questions.length) {
        setqid(1);
        return;
      }
      setqid(qid + 1);
    }
    }
    else{
      if(o.q!==q.selected && o.q!==q.isCorrect){
        setscore(score-1);
      }
      else if(o.q!==q.selected && o.q===q.isCorrect){
        setscore(score+1);
      }
      if (qid === questions.length) {
        setqid(1);
        return;
      }
      setqid(qid + 1);
    }
    
  };

  return (
    <>
      <div className="quizbeg">
        <div className="quizbeg__wrapper">
          {show ? (
            <>
              {done === 2 ? (
                <>
                  <h1>Thank You for taking this quiz!</h1>
                  <h2>Here is your score : </h2>
                  <h2>{score}/{questions.length} : {`${score/4*100}`}%</h2>
                </>
              ) : (
                <>
                  <h1>Click below to start the quiz on</h1>
                  <h2>Web Technology</h2>
                </>
              )}
            </>
          ) : (
            <>
              {questions.map((q) => (
                <>
                  {q.id === qid && (
                    <>
                      <h1>
                        {q.id}. {q.question}
                      </h1>
                      <div className="g1">
                        {q.options.map((o) => (
                          <button
                            className={`${
                              q.selected === o.q ? "selected" : "notselected"
                            }`}
                            key={o.q}
                            onClick={(e) => {
                              e.preventDefault();
                              handleScore(o,q);
                              q.selected = o.q;
                            }}
                          >
                            {o.text}
                          </button>
                        ))}
                      </div>
                      <div className="sub1">
                        {
                          <button
                            className="prev"
                            onClick={(e) => {
                              e.preventDefault();
                              handleqid("1");
                            }}
                          >
                            Prev Question
                          </button>
                        }

                        <button
                          className="next"
                          onClick={(e) => {
                            e.preventDefault();
                            handleqid("0");
                          }}
                        >
                          Next Question
                        </button>
                      </div>
                    </>
                  )}
                </>
              ))}
            </>
          )}

          {done !== 2 ? (
            <>
              <button
                className="submit"
                onClick={(e) => {
                  setDone(done + 1);
                  e.preventDefault();
                  setShow(!show);
                  setqid(1);
                }}
              >
                {show ? "Click Here!" : "Submit"}
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default About;

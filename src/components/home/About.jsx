import React from "react";
import { useState } from "react";
const questions = [
  {
    id: 1,
    question:
      "Which of the following is used in React.js to increase performance?",
    options: {
      option_1: { text: "Virtual DOM", isCorrect: true },
      option_2: { text: "Original DOM", isCorrect: false },
      option_3: { text: "Both of the above", isCorrect: false },
      option_4: { text: "None of the above", isCorrect: false },
    },
  },
  {
    id: 2,
    question: "What is ReactJS?",
    options: {
      option_1: { text: "Server-Side Framework", isCorrect: false },
      option_2: { text: "User Interface Framework", isCorrect: true }, //correct
      option_3: { text: "Both of the above", isCorrect: false },
      option_4: { text: "None of the above", isCorrect: false },
    },
  },
  {
    id: 3,
    question: "What is Babel?",
    options: {
      option_1: { text: "JaveScript Compiler", isCorrect: true }, //correct
      option_2: { text: "JaveScript Interpreter", isCorrect: false },
      option_3: { text: "JavaScript Transpiler", isCorrect: false },
      option_4: { text: "None", isCorrect: false },
    },
  },
  {
    id: 4,
    question:
      "Identify the one which is used to pass data to components from outside",
    options: {
      option_1: {text:"Render with arguments",isCorrect: false},
      option_2: {text:"setState",isCorrect: false},
      option_3: {text:"PropTypes",isCorrect: false},
      option_4: {text:"props",isCorrect: true}, //correct
    },
  },
];
const About = () => {
  const [show, setShow] = useState(true);
  const [qid, setqid] = useState(1);
  const [score, setscore] = useState(1);

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

  const handleScore = (isCorrect) => {  
    if(isCorrect===true){
      setscore(score+1);
      console.log(score);
      if (qid === questions.length) {
        setqid(1);
        return;
      }
      setqid(qid + 1);
    }
    else{    
      console.log("Wrong answer");
      if (qid === questions.length) {
        setqid(1);
        return;
      }

      setqid(qid + 1);
    }
  }
  return (
    <>
      <div className="quizbeg">
        <div className="quizbeg__wrapper">
          {show ? (
            <>
              <h1>Click below to start the quiz on</h1>
              <h2>Web Technology</h2>
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
                        <button onClick={()=>handleScore(q.options.option_1.isCorrect)} className="ans1">
                          {q.options.option_1.text}
                        </button>
                        <button onClick={()=>handleScore(q.options.option_2.isCorrect)} className="ans2">
                          {q.options.option_2.text}
                        </button>
                        <button onClick={()=>handleScore(q.options.option_3.isCorrect)} className="ans3">
                          {q.options.option_3.text}
                        </button>
                        <button onClick={()=>handleScore(q.options.option_4.isCorrect)} className="ans4">
                          {q.options.option_4.text}
                        </button>
                      </div>
                      <div className="sub1">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleqid("1");
                          }}
                        >
                          Prev Question
                        </button>
                        <button
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

          <button
            className="submit"
            onClick={(e) => {
              e.preventDefault();
              setShow(!show);
              setqid(1);
            }}
          >
            {show ? "Click Here!" : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
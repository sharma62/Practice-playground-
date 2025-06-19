import React, { useState } from "react";
import upIcon from "../../../assets/up-chevron.png";
import downIcon from "../../../assets/down-chevron.png";

const Faq = () => {
  const Q_and_A = [
    {
      question: "you want to eat",
      answer: "yes he needs to eat food",
    },
    {
      question: "sita wants chocolate",
      answer: "no she don't needs to eat food",
    },
    {
      question: "Does they need a car",
      answer: "yes they need a car",
    },
    {
      question: "can i get your number please",
      answer: "yes if you want ",
    },
    {
      question: "i ought to go",
      answer: "yes, if you want",
    },
  ];
  const [select, setSelect] = useState(null);
  const handleClick = (idx) => {
    if (select === idx) {
      return setSelect(null);
    }
    setSelect(idx);
  };
  console.log(select);
  return (
    <>
      <h1 className="text-2xl md:text-5xl font-semibold text-center p-5 text-white">
        FAQs
      </h1>
      <section className="faq text-white container mx-auto p-5 ">
        {Q_and_A.map((item, idx) => {
          return (
            <div
              key={idx}
              className="block item capitalize w-full px-30 py-5 gap-8 mb-5 border-b-2 border-gray-600 hover:bg-gray-800 transition-all duration-300 cursor-pointer "
            >
              <div
                className="question flex justify-between "
                onClick={() => {
                  handleClick(idx);
                }}
              >
                <h3>{`Q.${idx + 1} ${item.question}`}</h3>
                <img
                  src={`${select === idx ? downIcon : upIcon}`}
                  alt=""
                  className="w-3 h-3 md:h-5 md:w-5"
                />
              </div>
              <div className={` ${select === idx ? "block" : "hidden"} `}>
                <p>{`Ans - ${item.answer}`}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Faq;

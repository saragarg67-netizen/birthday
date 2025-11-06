import React, { useState, useEffect } from "react";
import img1 from "./Images/1.jpg";
import img2 from "./Images/2.jpg";
import img3 from "./Images/3.jpg";
import img4 from "./Images/4.jpg";
import img5 from "./Images/5.jpg";
import img6 from "./Images/6.jpg";
import img7 from "./Images/7.png";

const images = [img1, img2, img4, img5, img6, img7];

const GiftForMom = () => {
  const [giftStates, setGiftStates] = useState({
    happy: false,
    cake: false,
    bday: false,
  });
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [celebrate, setCelebrate] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleGift = (gift) => {
    setGiftStates((prev) => ({ ...prev, [gift]: !prev[gift] }));
  };

  const selectAnswer = (question, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  const submitQuiz = () => {
    const correctAnswers = {
      "What is the first Disney movie we watched together?": "Toy Story 1",
      "What kind of games did we used to play during Saturdays in your OPD?":
        "Paper Games",
      "What was the first birthday gift I gave you?": "Perfume",
    };

    let newScore = 0;
    Object.keys(correctAnswers).forEach((q) => {
      if (selectedAnswers[q] === correctAnswers[q]) newScore++;
    });

    setScore(newScore);
    if (newScore === 3) setCelebrate(true);
  };

  const giftBoxStyle = {
    background: "#e6f0ff",
    border: "2px solid #60a5fa",
    borderRadius: "15px",
    padding: "40px",
    width: "180px",
    height: "180px",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.2s",
    margin: "10px",
    fontSize: "2rem",
    fontFamily: "Courier New, monospace",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const giftGridStyle = {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const sectionStyle = {
    background: "white",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    border: "2px solid #60a5fa",
    marginBottom: "25px",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    transformOrigin: "center bottom",
  };

  const celebrationStyle = {
    fontSize: "1.5rem",
    color: "#facc15",
    textAlign: "center",
    marginTop: "15px",
    fontWeight: "900",
    animation: "pulse 1s infinite alternate",
    fontFamily: "Courier New, monospace",
  };

  const headerContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "40px",
  };

  const headerImageStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const galleryStyle = {
    display: "flex",
    overflowX: "scroll",
    gap: "15px",
    padding: "10px 0",
    scrollbarWidth: "thin",
    scrollbarColor: "#60a5fa #f0f0f0",
  };

  const galleryItemStyle = {
    minWidth: "150px",
    textAlign: "center",
  };

  const galleryImageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "15px",
    objectFit: "cover",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        maxWidth: "900px",
        margin: "auto",
        padding: "30px",
        fontFamily: "Courier New, monospace",
        background: "linear-gradient(120deg, #fce1ff, #e6f0ff)",
        borderRadius: "25px",
        transition: "background 3s ease",
      }}
    >
      {/* 🎉 Confetti */}
      {celebrate && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      <header style={headerContainerStyle}>
        <img src={img1} alt="Mom" style={headerImageStyle} />
        <div>
          <h1
            style={{
              fontSize: "3rem",
              color: "black",
              fontWeight: "900",
              fontFamily: "Times New Roman, serif",
              margin: 0,
            }}
          >
            Happy Birthday, Mom! 🎉
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              color: "black",
              whiteSpace: "pre-line",
              fontWeight: "600",
            }}
          >
            A tiny website made with huge love — open, explore, and smile.
          </p>
        </div>
      </header>

      {/* Section: Digital Gift Boxes */}
      <div style={sectionStyle} className="section">
        <h3
          style={{
            textAlign: "center",
            color: "black",
            fontFamily: "Times New Roman, serif",
            fontWeight: "900",
            fontSize: "2.2rem", // bigger heading
          }}
        >
          Digital Gift Boxes 🎁
        </h3>
        <div style={giftGridStyle}>
          <div
            style={{
              ...giftBoxStyle,
              fontFamily: "Poppins, sans-serif", // revert inside box font
            }}
            onClick={() => toggleGift("happy")}
          >
            {giftStates.happy ? "HAPPY" : "🎁"}
          </div>
          <div
            style={{
              ...giftBoxStyle,
              fontFamily: "Poppins, sans-serif",
            }}
            onClick={() => toggleGift("cake")}
          >
            {giftStates.cake ? "🎂" : "🎁"}
          </div>
          <div
            style={{
              ...giftBoxStyle,
              fontFamily: "Poppins, sans-serif",
            }}
            onClick={() => toggleGift("bday")}
          >
            {giftStates.bday ? "BDAY" : "🎁"}
          </div>
        </div>
      </div>

      <div style={sectionStyle} className="section">
        <h3
          style={{
            color: "black",
            fontFamily: "Times New Roman, serif",
            fontWeight: "900",
          }}
        >
          Mom Quiz 💖
        </h3>
        {[
          "What is the first Disney movie we watched together?",
          "What kind of games did we used to play during Saturdays in your OPD?",
          "What was the first birthday gift I gave you?",
        ].map((question, idx) => (
          <div key={idx} style={{ marginBottom: "15px" }}>
            <p
              style={{
                fontWeight: "900",
                fontFamily: "Times New Roman, serif",
                color: "black",
              }}
            >
              {question}
            </p>
            {(() => {
              let options = [];
              if (question.includes("Disney"))
                options = ["Toy Story 1", "The Lion King", "Aladdin"];
              else if (question.includes("games"))
                options = ["Vedio Games", "Outdoor Games", "Paper Games"];
              else if (question.includes("birthday gift"))
                options = ["Scarf", "Perfume", "Book"];

              return options.map((option) => (
                <button
                  key={option}
                  style={{
                    margin: "5px",
                    padding: "10px 25px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    border:
                      selectedAnswers[question] === option
                        ? "2px solid #60a5fa"
                        : "1px solid #93c5fd",
                    background:
                      selectedAnswers[question] === option
                        ? "#dbeafe"
                        : "#e6f0ff",
                    fontWeight: "bold",
                    fontFamily: "Courier New, monospace",
                    color: "black",
                  }}
                  onClick={() => selectAnswer(question, option)}
                >
                  {option}
                </button>
              ));
            })()}
          </div>
        ))}
        <button
          onClick={submitQuiz}
          style={{
            marginTop: "15px",
            padding: "12px 20px",
            borderRadius: "12px",
            cursor: "pointer",
            background: "#60a5fa",
            color: "white",
            border: "none",
            fontWeight: "bold",
            fontFamily: "Courier New, monospace",
          }}
        >
          Submit Quiz
        </button>
        {score !== null && (
          <div>
            <p
              style={{
                marginTop: "10px",
                fontWeight: "900",
                fontSize: "1.2rem",
                color: "black",
              }}
            >
              Your Score: {score}/3
            </p>
            {celebrate && (
              <p style={celebrationStyle}>
                🎉 WOW! Perfect Score! You did it! 🎉
              </p>
            )}
          </div>
        )}
      </div>

      <div style={sectionStyle} className="section">
        <h3
          style={{
            color: "black",
            fontFamily: "Times New Roman, serif",
            fontWeight: "900",
          }}
        >
          A Note From Me 💌
        </h3>
        <p
          style={{
            whiteSpace: "pre-line",
            fontSize: "1.2rem",
            lineHeight: "1.6",
          }}
        >
          Hey Mom, Happy Birthday! 🎂 Hope you have an awesome day filled with
          cake, good food, and everything you enjoy. You've always been there
          for the family, and today is all about celebrating you. I know life
          gets busy and we all get caught up in our own worlds, but today I
          wanted to make sure you know that you matter and that the love you've
          given hasn't gone unnoticed. Happy Birthday again! 🎉 Love, Sara
        </p>
      </div>

      <div style={sectionStyle} className="section">
        <h3
          style={{
            textAlign: "center",
            color: "black",
            fontFamily: "Times New Roman, serif",
            fontWeight: "900",
          }}
        >
          Memory Gallery 📸
        </h3>
        <div style={galleryStyle}>
          {images.map((src, idx) => (
            <div key={idx} style={galleryItemStyle} className="gallery-item">
              <img
                src={src}
                alt={`Memory ${idx + 1}`}
                style={galleryImageStyle}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-item:hover img {
          transform: scale(1.05);
          box-shadow: 0 12px 25px rgba(0,0,0,0.35);
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        .section:hover {
          transform: translateY(-12px) rotateX(1deg);
          box-shadow: 0 20px 35px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

export default GiftForMom;

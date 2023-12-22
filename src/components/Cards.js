import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Top Students</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img1.jpg"
              text="Lisa : KaroAbhayas played a crucial role in my NEET success. The platform's in-depth courses, combined with interactive quizzes and real-time progress tracking, helped me stay ahead in my preparation. It's the go-to platform for serious medical aspirants."
              label=""
              path=""
            />
            <CardItem
              src="images/img2.jpg"
              text="David : I owe a significant part of my success to KaroAbhayas. The platform's commitment to excellence and continuous improvement sets it apart. The Latest Courses section always kept me informed about the newest developments in the curriculum, giving me a competitive edge."
              label=" "
              path=""
            />
            <CardItem
              src="images/img3.jpg"
              text="Michael : As a top 100 NEET scorer, I highly recommend KaroAbhayas for its comprehensive study materials and top-notch faculty. The personalized learning paths and adaptive assessments tailored to my strengths and weaknesses were instrumental in achieving my rank."
              label=""
              path=""
            />
            <CardItem
              src="images/img4.jpg"
              text="Kerry : My NEET journey was significantly enhanced by KaroAbhayas. The website's user-friendly interface, combined with insightful reviews and testimonials, convinced me that it's the ideal platform for serious aspirants. Proud to be a KaroAbhayas success story!"
              label=""
              path=""
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from "react";
import ProfileImage from "../images/prof-image.jpg"

const About = () => {
  return (
    <>
      <section>
        <h2 className="headings">About <span>me.</span></h2>
        <div className="about">
          <div className="width margin-end">
            <p>Hi, I'm Stephanie.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quasi quos. Dolores optio voluptatem perspiciatis saepe soluta amet iure laudantium eum! Aut voluptate odio ducimus consequuntur incidunt culpa iusto placeat. Doloribus ut, alias quasi ipsa repudiandae recusandae commodi nihil? Possimus dolorem aliquam quos tempora architecto aut non voluptates commodi repellendus voluptas atque ratione placeat consequuntur soluta minima, molestias libero. Minus!Ad, dignissimos incidunt voluptatibus, atque sapiente quas aperiam illo provident ut rerum laboriosam, exercitationem cum veniam. Error eius magni, omnis veritatis eligendi nam inventore expedita saepe vitae labore repellat dolorum!
            </p>
          </div>
          <div>
            <img src={ProfileImage} alt="A girl smiling" className="width margin-start"></img>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
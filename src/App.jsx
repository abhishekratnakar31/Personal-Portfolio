import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const App = () => {

   let [showContent, setShow] = useState();
  useGSAP(() => {
   
    const tl = gsap.timeline();
    tl.to(".to-mask-group", {
      rotate: 20,
      ease: "Power4.easeInOut",
      duration: 0.5,
      transformOrigin: "50% 50%",
    });
    tl.to(".to-mask-group", {
      rotate: -20,
      ease: "Power4.easeInOut",
      duration: 0.5,
      transformOrigin: "50% 50%",
    });
    tl.to(".to-mask-group", {
      rotate: 0,
      ease: "Power4.easeInOut",
      duration: 0.5,
      transformOrigin: "50% 50%",
    })
      
      .to(".to-mask-group", {
        rotate: "30",
        ease:"expo.inOut",
        duration: 1.8,
       scale: 10,
        opacity:0,

        // opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove();
            setShow(true);
            this.kill();
          }
        },
      });
  });

  return (
    <>
      <div className="svg flex items-center justify-center top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox=" 0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="ratnakarportfoliomask">
              <rect width="100%" height="100%" fill="black">
                {" "}
              </rect>
              <g className="to-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="130"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  MMMCVIII
                </text>
              </g>
            </mask>
          </defs>

          <image
            href="bg.jpg"
            width="100%"
            height="100%"
            preserveAspectRatio=" xMidYMid slice"
            mask="url(#ratnakarportfoliomask)"
          />
        </svg>
      </div>

      {showContent &&(
        <div className="main w-full">

          <div className="landing w-full h-screen bg-black">
            <div className="imagediv relative w-full h-screen ">
            
              <img className="w-full h-screen bg-red-900 absolute " src="./bg.jpg"/>
                <img src="./1.png" alt="" className="w-full absolute h-screen object-cover "/>
                <img src="./building.png" alt="" className="w-full absolute h-screen object-cover " />
            </div>
          </div>
        </div>
      )}
    </>

  );
};

export default App;

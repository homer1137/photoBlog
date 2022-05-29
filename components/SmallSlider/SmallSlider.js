import React, { useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { sliderArray } from "./sliderArray";

import styles from "../../styles/Slider.module.css";

export default function SmallSlider({ moveSlider, setMoveSlider }) {
  const sliderArray2 = sliderArray;
  console.log({sliderArray2})
  //движение стелками
  const active2 = {
    basis: true,
  };
  function moveRight() {
    if (moveSlider === 100 * (sliderArray2.length - 1)) {
      setMoveSlider((prev) => prev - 100 * (sliderArray2.length - 1));
    } else {
      setMoveSlider((prev) => prev + 100);
    }
  }
  function moveLeft() {
    if (moveSlider === 0) {
      setMoveSlider((prev) => prev + 100 * (sliderArray.length - 1));
    } else {
      setMoveSlider((prev) => prev - 100);
    }
  }

  //движение мышкой

  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  function onMouseDown1(e) {
    let Cx = e.nativeEvent.clientX;
    setState({
      ...state,
      isScrolling: true,
      clientX: Cx,
    });
  }

  function onMouseUp1(e) {
    if (state.scrollX < 0) {
      moveLeft();
    }
    if (state.scrollX > 0) {
      moveRight();
    }

    setState({
      ...state,
      isScrolling: false,
      clientX: 0,
      scrollX: 0,
    });
  }

  function onMouseMove1(e) {
    let v = e.nativeEvent.clientX;
    let { clientX } = state;
    if (state.isScrolling) {
      setState({
        ...state,
        scrollX: clientX - v,
      });
    }
  }

  return (
    
   
     
      
      <div className={styles.sliderContainer}>
      <div className={styles.sliderWindow}>  
      <div
          className={styles.sliderContainerRowWrapper}
          style={{ width: `${sliderArray2.length*100+'%'}`}}

          
          state={state}
          
        >
          {sliderArray2.map((item) => (
            <div
            className={styles.sliderContainerRow2}
            
            onPointerDown={(e) => onMouseDown1(e)}
            onPointerUp={(e) => onMouseUp1(e)}
            onPointerMove={(e) => onMouseMove1(e)}
            onPointerLeave={(e) => onMouseUp1(e)}
            key={item.title}
          >
              <div style={{width: '100%', height: '100vh'}}
              >
              <Image
                src={item.picture}
                
                layout="fill"
                objectFit="cover"
      
                alt={"minimalism house"}
              />
              </div>
              <div style={{position: 'absolute', top: '0', left: '0', zIndex: '21'}}>
              <h2>{item.title}</h2>
              <button style={{zIndex: '12'}}>Get more</button>
              </div>
              
            </div>
          ))}

          </div>
        </div>
        <div className={styles.sliderContainerRow}>
        <IoChevronBack className={styles.arrow} onClick={moveLeft} />
        <ul className={styles.ulclass}>
          {sliderArray2.map((item, index) => (
            <li
              className={styles.liStyled}
              key={item.title}
              onClick={() => setMoveSlider(100 * index)}
              active2={
                index === (moveSlider + 100) / 100 - 1 ? { active2 } : null
              }
            ></li>
          ))}
        </ul>
        <IoChevronForward className={styles.arrowright} onClick={moveRight} />
      </div>
      </div>
      
    
  );
}

import React, { useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { sliderArray } from "./sliderArray";

import styles from "../../styles/Slider.module.css";

export default function SmallSlider({ moveSlider, setMoveSlider }) {
  const sliderArray2 = sliderArray;

  //движение стелками

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
          style={{
            width: `${sliderArray2.length * 100 + "%"}`,
            right: `${
              state.isScrolling
                ? moveSlider + state.scrollX + "%"
                : moveSlider + "%"
            }`,
          }}
          state={state}
        >
          {sliderArray2.map((item, index) => (
            <div
              className={styles.sliderContainerRow2}
              onPointerDown={(e) => onMouseDown1(e)}
              onPointerUp={(e) => onMouseUp1(e)}
              onPointerMove={(e) => onMouseMove1(e)}
              onPointerLeave={(e) => onMouseUp1(e)}
              key={item.title}
            >
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  transition: '1s ease-out',
                  opacity: `${
                    index === (moveSlider + 100) / 100 - 1 ? "1" : "0.2"
                  }`,
                }}
              >
                <Image
                  src={item.picture}
                  layout="fill"
                  objectFit="cover"
                  alt={"minimalism house"}
                />
              </div>
              <div
                className={styles.textContainer}
                style={{
                  top: `${
                    index === (moveSlider + 100) / 100 - 1 ? "50%" : "70%"
                  }`,
                  opacity: `${
                    index === (moveSlider + 100) / 100 - 1 ? "1" : "0"
                  }`,
                }}
              >
                <h2>{item.title}</h2>
                <div>{item.description}</div>
                <button style={{ zIndex: "18" }}>Get more</button>
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
              style={{
                backgroundColor: `${
                  index === (moveSlider + 100) / 100 - 1 ? "white" : "rgba(0,0,0,0.1)"
                }`,
              }}
            ></li>
          ))}
        </ul>
        <IoChevronForward className={styles.arrowright} onClick={moveRight} />
      </div>
    </div>
  );
}

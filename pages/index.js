import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SmallSlider from "../components/SmallSlider/SmallSlider";
import { useState } from "react";
import PortfolioPreview from "../components/PortfolioPreview";

export default function Home() {
  const [moveSlider, setMoveSlider] = useState(0);
  return (
    <>
      <SmallSlider moveSlider={moveSlider} setMoveSlider={setMoveSlider}/>
      <PortfolioPreview />
    </>
  );
}

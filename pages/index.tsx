import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { DummyComp } from "../components/dummy";

const Home = (_props: any) => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <div>
      <h2>My Test</h2>
      <DummyComp>{counter1}</DummyComp>
      <DummyComp>{counter2}</DummyComp>
      <button onClick={() => setCounter1((oldCount) => oldCount + 1)}>
        Increase 1
      </button>
      <button onClick={() => setCounter2((oldCount) => oldCount + 1)}>
        Increase 2
      </button>
    </div>
  );
};

export default Home;

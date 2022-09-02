import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { DummyComp } from "../components/dummy";

const Home = (_props: any) => {
  const [myStateFromDb, setMyStateFromDb] = useState({
    counter1: 0,
    counter2: 0,
  });
  return (
    <div>
      <h2>My Test</h2>
      <DummyComp>{myStateFromDb.counter1}</DummyComp>
      <DummyComp>{myStateFromDb.counter2}</DummyComp>
      <button
        onClick={() =>
          setMyStateFromDb((oldState) => {
            return { ...oldState, counter1: oldState.counter1 + 1 };
          })
        }
      >
        Increase 1
      </button>
      <button
        onClick={() =>
          setMyStateFromDb((oldState) => {
            return { ...oldState, counter2: oldState.counter2 + 1 };
          })
        }
      >
        Increase 2
      </button>
    </div>
  );
};

export default Home;

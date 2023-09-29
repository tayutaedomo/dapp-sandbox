"use client";

import React from "react";
import type { NextPage } from "next";

import Link from "next/link";

import styles from "./page.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/ethers-js">ethers.js TOP</Link>
        </li>
        <li>
          <Link href="/thirdweb-dev">thirdweb-dev TOP</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;

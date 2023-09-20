import Link from "next/link";

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/ethers-js">ethers.js Top</Link>
        </li>
        <li>
          <Link href="/">web3.js Top (TODO)</Link>
        </li>
      </ul>
    </main>
  )
}

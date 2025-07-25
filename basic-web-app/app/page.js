"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: 20 }}>
      <h1 className={styles.title}> Welcome </h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}> Add 1 to count</button>
      </div>
      <div style={{ marginTop: 20 }}>
        <img src="/logo.jpg" alt="Logo" width={100} height={100} />
      </div>
    </main>
  );
}

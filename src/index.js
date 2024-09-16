import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // コンポーネントは、様々なライフサイクルメソッドや副作用を持つことがある
  // StrictModeは、これらのコンポーネントが意図しない動作をしていないか、
  // 将来的な問題を引き起こす可能性がないかなどをチェック

  // StrictModeをオフにすると、レンダリングが2回走らない
  // <StrictMode>
    <App />
  // </StrictMode>
);

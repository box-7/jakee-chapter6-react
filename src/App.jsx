import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// exportすることで、他のファイルから参照できる
export const App = () => {
  // 1つ目の引数は変数、2つ目は関数、初期値はuseStateの引数
  // useStateは関数コンポーネントのコンポーネントの直下でしか呼べない
  const [num, setNum] = useState(0);
  const [isShowFace,setIsShowFace] = useState(false);

  const onClickCountup = () => {
    // setNumの状態が変わった時に、コンポーネントが最初から改めて読み込まれる
      // 複数setNumがあると、最後の1回が読み込まれる
      // setNum(num+1);
      // setNum(num+1);
    // prevは現在のnum。関数を使うと、 想定通り2アップする
    setNum((prev) => prev + 1);
  };

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  }

  // どんな時に実行するか制御する
  // 第２引数が空だと、初期描画のみ反映
  // numにすると、numが変更された時反映
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);
  // 外側の{}: JSX内でJavaScriptを評価するために使います。これは、JSXの中で変数や関数を呼び出したり、計算結果を表示したいときに使います。
  // return <p style={styleObj}>Hello, world!</p>;
  // 内側の{}: オブジェクトや配列、値を渡す際に使うことができます
  // return <p style={{ color: 'blue', backgroundColor: 'yellow' }}>Styled text</p>;
  // オブジェクトの値は文字列で書く
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>(^ ^)</p>}
    </>
  );
};

// 再レンダリングされる条件
  // ステートが変わった時
  // 受け取っているpropsの値が変わった時
  // 親のコンポーネントが変わったら、子のコンポーネントも再レンダリングされる


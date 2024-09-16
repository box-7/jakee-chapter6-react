export const ColorfulMessage = (props) => {
    console.log("ColorfulMessage--------------------");
  // ここで分割代入できる
  // export const ColorfulMessage = ({ color,children }) => {
  
  //   console.log(props);
  const { color, children } = props;
  const contentStyleA = {
    // color: color, キーとバリューが同じ場合は1語でかける
    color,
    fontSize: "18px",
  };

  return <p style={contentStyleA}>{children}</p>;
};

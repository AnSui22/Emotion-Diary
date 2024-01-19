import MyHeader from "./components/MyHeader";
import MyButton from "./components/MyButton";

const HeaderExample = () => {
  <>
    <MyHeader
      headText={"Harmonic Moments"}
      leftChild={
        <MyButton text={"왼쪽버튼"} onClick={() => alert("왼쪽클릭")} />
      }
      rightChild={
        <MyButton text={"오른쪽버튼"} onClick={() => alert("오른쪽클릭")} />
      }
    />
    ;
  </>;
};
export default HeaderExample;

import { useState, useRef } from "react";
import CheckList from "../components/CheckList";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";
import CheckEditor from "../components/CheckEditor";

const CheckListPage = () => {
  const navigate = useNavigate();

  const [checks, setChecks] = useState([]);
  const idRef = useRef(0);

  const createCheck = (content) => {
    const newCheck = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().toLocaleDateString("en-CA"),
    };
    setChecks([...checks, newCheck]);
  };

  return (
    <div className="CheckListPage">
      <MyHeader
        headText={"Check List"}
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
      />
      <div className="CheckListContent">
        <CheckEditor createCheck={createCheck} />
        <CheckList checks={checks} />
      </div>
    </div>
  );
};

export default CheckListPage;

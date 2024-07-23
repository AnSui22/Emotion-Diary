import { useState, useRef, useEffect } from "react";
import CheckList from "../components/CheckList";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";
import CheckEditor from "../components/CheckEditor";

const CheckListPage = () => {
  const navigate = useNavigate();

  const [checks, setChecks] = useState(() => {
    const savedChecks = localStorage.getItem("checks");
    return savedChecks ? JSON.parse(savedChecks) : [];
  });
  const idRef = useRef(0);

  useEffect(() => {
    localStorage.setItem("checks", JSON.stringify(checks));
  }, [checks]);

  const createCheck = (content) => {
    const newCheck = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().toLocaleDateString("en-CA"),
    };
    setChecks([...checks, newCheck]);
  };

  const onUpdate = (targetId) => {
    setChecks(
      checks.map((check) =>
        check.id === targetId ? { ...check, isDone: !check.isDone } : check
      )
    );
  };

  const onDelete = (targetId) => {
    setChecks(checks.filter((check) => check.id !== targetId));
  };

  return (
    <div className="CheckListPage">
      <MyHeader
        headText={"Check List"}
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
      />
      <div className="CheckListContent">
        <CheckEditor createCheck={createCheck} />
        <CheckList checks={checks} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default CheckListPage;

import { useRef, useState } from "react";

const CheckEditor = ({ createCheck }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      return;
    }
    createCheck(content);
    setContent("");
  };

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="CheckEditor">
      <h2>Check List 추가</h2>
      <div className="input_box check_wrapper">
        <textarea
          placeholder="추가할 Check list를 입력해주세요."
          value={content}
          ref={contentRef}
          onChange={onChangeContent}
          onKeyUp={onKeyEnter}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default CheckEditor;

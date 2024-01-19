import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { DiaryDispatchContext } from "../App.js";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem";

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_descript: "happy",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_descript: "average",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_descript: "sad",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_descript: "tired",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_descript: "annoyed",
  },
  {
    emotion_id: 6,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion6.png`,
    emotion_descript: "nervous",
  },
];

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const contentRef = useRef();
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };

  const { onCreate } = useContext(DiaryDispatchContext);

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    onCreate(date, content, emotion);
    navigate("/", { replace: true });
  };

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={"NEW DIARY"}
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
      />
      <div>
        <section>
          <h2>Date</h2>
          <div className="input_box">
            <input
              className="input_date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>

        <section>
          <h2>Emotion</h2>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>

        <section>
          <h2>Today's diary</h2>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="일기를 작성해주세요."
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>

        <section>
          <div className="control_box">
            <MyButton
              text={"Cancel"}
              type={"negative"}
              onClick={() => navigate(-1)}
            />
            <MyButton
              text={"Complete"}
              type={"positive"}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;

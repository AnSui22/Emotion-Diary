import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App.js";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem.js";
import WeatherItem from "./WeatherItem.js";
import { getStringDate } from "../util/date.js";
import { emotionList } from "../util/emotionList.js";
import { weatherList } from "../util/weatherList.js";

const DiaryEditor = ({ isEdit, originData }) => {
  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(1);
  const [weather, setWeather] = useState(1);

  const titleRef = useRef();
  const [title, setTitle] = useState("");

  const contentRef = useRef();
  const [content, setContent] = useState("");

  const artistRef = useRef();
  const [artist, setArtist] = useState("");

  const musicRef = useRef();
  const [music, setMusic] = useState("");

  const navigate = useNavigate();
  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };

  const handleClickWeather = (weather) => {
    setWeather(weather);
  };

  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

  const handleSubmit = () => {
    const title = titleRef.current.value;
    const artist = artistRef.current.value;
    const music = musicRef.current.value;

    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit
          ? "Do you want to modify your diary?"
          : "Do you want to save your diary?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, title, content, emotion, weather, artist, music);
      } else {
        onEdit(
          originData.id,
          date,
          title,
          content,
          emotion,
          weather,
          artist,
          music
        );
      }
    }

    navigate("/", { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      onRemove(originData.id);
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setTitle(originData.title);
      setContent(originData.content);
      setEmotion(originData.emotion);
      setWeather(originData.weather);
      setArtist(originData.artist);
      setMusic(originData.music);
    }
  }, [isEdit, originData]);

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={isEdit ? "Edit Diary" : "New Diary"}
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
        rightChild={
          isEdit && (
            <MyButton
              text={"Delete"}
              type={"negative"}
              onClick={handleRemove}
            />
          )
        }
      />
      <div>
        <div className="DateAndWeather">
          <section className="DateSection">
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

          <section className="DateSection">
            <h2>Weather</h2>
            <div className="input_box emotion_list_wrapper">
              {weatherList.map((it) => (
                <WeatherItem
                  key={it.weather_id}
                  {...it}
                  onClick={handleClickWeather}
                  isSelected={it.weather_id === weather}
                />
              ))}
            </div>
          </section>
        </div>

        <section>
          <h2>Title</h2>
          <div className="input_box title_wrapper">
            <textarea
              placeholder="제목을 작성해주세요."
              ref={titleRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </section>

        <section>
          <h2>Mood</h2>
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
          <h2>Today's Playlist</h2>
          <div className="input_box song_wrapper">
            <textarea
              placeholder="Artist"
              ref={artistRef}
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
            <textarea
              placeholder="Music"
              ref={musicRef}
              value={music}
              onChange={(e) => setMusic(e.target.value)}
            />
          </div>
        </section>

        <section>
          <h2>Today's Diary</h2>
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

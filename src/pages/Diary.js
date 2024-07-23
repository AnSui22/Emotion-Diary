import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { getStringDate } from "../util/date";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { weatherList } from "../util/weatherList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">loading...</div>;
  } else {
    const curWeatherData = weatherList.find(
      (it) => parseInt(it.weather_id) === parseInt(data.weather)
    );
    return (
      <div className="DiaryPage">
        <MyHeader
          headText={getStringDate(new Date(data.date))}
          leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
          rightChild={
            <MyButton
              text={"Edit"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article className="diary_wrapper">
          <div className="img_wrapper">
            <p>/ {data.title} /</p>
          </div>

          <div className="info_wrapper">
            <div className="date_wrappper">
              <h2>Date</h2>
              <div className="emotion_descript">
                {getStringDate(new Date(data.date))}
              </div>
            </div>

            <div className="date_wrappper2">
              <h2>Weather</h2>
              <div className="diary_img_wrapper">
                <img src={curWeatherData.weather_img} />
              </div>
            </div>
          </div>
        </article>

        <div className="song_wrappper">
          <div className="diary_song_icon">
            <FontAwesomeIcon icon={faHeadphones} />{" "}
          </div>
          <div className="emotion_descript">
            {data.artist} - {data.music}
          </div>
        </div>

        <div className="diary_content_wrapper">
          <p>{data.content}</p>
        </div>
      </div>
    );
  }
};
export default Diary;

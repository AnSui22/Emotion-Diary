import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { format } from "date-fns";
import { monthlist, yearlist } from "../util/date";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  const currentYear = curDate.getFullYear();
  const currentMonth = format(curDate, "MM");

  const headText = `${currentYear} ${currentMonth}`;
  const navigate = useNavigate();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);

  const increaseMonth = () => {
    if (currentYear <= new Date().getFullYear() + 2) {
      setCurDate(new Date(currentYear, curDate.getMonth() + 1, 1));
    }
  };
  const decreaseMonth = () => {
    if (currentYear >= new Date().getFullYear() - 2) {
      setCurDate(new Date(currentYear, curDate.getMonth() - 1, 1));
    }
  };
  const handleYearChange = (e) => {
    const selectedYear = parseInt(e.target.value);
    setCurDate(new Date(selectedYear, currentMonth, 1));
  };
  const handleMonthChange = (e) => {
    const selectedMonth = parseInt(e.target.value) - 1;
    setCurDate(new Date(currentYear, selectedMonth, 1));
  };

  const HandleDate = () => {
    return (
      <div className="HandleDateWrapper">
        <div className="HandleDate">
          <select
            className={"select_year"}
            value={currentYear}
            onChange={handleYearChange}
          >
            {yearlist.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            className={"select_month"}
            value={currentMonth}
            onChange={handleMonthChange}
          >
            {monthlist.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>

          <button className="today_btn" onClick={() => setCurDate(new Date())}>
            Today
          </button>
        </div>
        <div>
          <MyButton
            text={"Calender"}
            type={"positive"}
            onClick={() => navigate("/")}
          />

          <MyButton
            text={"New"}
            type={"positive"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <HandleDate />
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};
export default Home;

import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import { format } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { monthlist, yearlist } from "../util/date";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryTitle from "../components/DiaryTitle";

const RenderWeeks = () => (
  <div className="week_row">
    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((week, idx) => (
      <div className="col" key={idx}>
        {week}
      </div>
    ))}
  </div>
);

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [curDate, setCurDate] = useState(new Date());
  const navigate = useNavigate();

  const currentYear = curDate.getFullYear();
  const currentMonth = format(curDate, "MM");
  const headText = `${currentYear} ${currentMonth}`;

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

  // 현재 월의 시작 날짜, 끝 날짜, 첫 주의 시작날짜, 마지막 주의 끝날짜
  const monthStart = startOfMonth(curDate);
  const monthEnd = endOfMonth(curDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  // 각 주의 날짜 및 일기 정보를 저장할 배열과 변수
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");

      // Find diary for the current date
      const currentDiary = diaryList.find((diary) => {
        const diaryDate = format(new Date(diary.date), "d");
        return (
          isSameDay(day, new Date(diary.date)) && formattedDate === diaryDate
        );
      });

      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : currentMonth !== format(day, "MM")
              ? "not-valid"
              : "valid"
          }`}
          key={day}
        >
          <span
            className={`${
              currentMonth !== format(day, "MM") ? "text not-valid" : ""
            } ${isSameDay(day, new Date()) ? "today" : ""} `}
          >
            {formattedDate}
          </span>

          <div className="diary_titles">
            {currentDiary ? (
              <DiaryTitle key={currentDiary.id} {...currentDiary} />
            ) : (
              <></>
            )}
          </div>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="day_row" key={day}>
        {days}
      </div>
    );
    days = [];
  }

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
            text={"일기 모아보기"}
            type={"positive"}
            onClick={() => navigate("/diarylist")}
          />

          <MyButton
            text={"NEW"}
            type={"positive"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="home">
      <HandleDate />

      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />

      <div className="calender">
        <RenderWeeks />
        <div className="body">{rows}</div>
      </div>
    </div>
  );
};
export default Home;

import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const headText = `${curDate.getFullYear()} / ${curDate.getMonth() + 1}`;

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
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  const handleYearChange = (e) => {
    const selectedYear = parseInt(e.target.value);
    setCurDate(new Date(selectedYear, curDate.getMonth(), curDate.getDate()));
  };

  const handleMonthChange = (e) => {
    const selectedMonth = parseInt(e.target.value) - 1;
    setCurDate(
      new Date(curDate.getFullYear(), selectedMonth, curDate.getDate())
    );
  };

  const SelectDate = () => {
    return (
      <div className="SelectDate">
        <select
          className={"select_year"}
          value={curDate.getFullYear()}
          onChange={handleYearChange}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          className={"select_month"}
          value={curDate.getMonth() + 1}
          onChange={handleMonthChange}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div>
      <SelectDate />
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

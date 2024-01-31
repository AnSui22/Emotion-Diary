import React, { useContext, useReducer, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      newState = [action.data, ...state];
      break;
    } // 배열 안에 객체 [{...}, {...}, {...}]

    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }

    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    title: "오늘의 일기 1번",
    content: "오늘의 일기 1번입니다 만나서 반가워요",
    date: 1705503032067,
    artist: "에스파",
    music: "thirsty",
  },
  {
    id: 2,
    emotion: 2,
    title: "오늘의 일기 2번",
    content: "오늘의 일기 2번입니다 만나서 반가워요",
    date: 1705503032068,
    artist: "에스파",
    music: "thirsty",
  },
  {
    id: 3,
    emotion: 3,
    title: "오늘의 일기 3번",
    content: "오늘의 일기 3번입니다 만나서 반가워요",
    date: 1705503032069,
    artist: "에스파",
    music: "thirsty",
  },
  {
    id: 4,
    emotion: 4,
    title: "오늘의 일기 4번",
    content: "오늘의 일기 4번입니다 만나서 반가워요",
    date: 1705503032070,
    artist: "에스파",
    music: "thirsty",
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(0);

  // CREATE - 객체
  const onCreate = (date, title, content, emotion, artist, music) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        title,
        content,
        emotion,
        artist,
        music,
      },
    });
    dataId.current += 1;
  };

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  // EDIT
  const onEdit = (targetId, date, title, content, emotion, artist, music) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        title,
        content,
        emotion,
        artist,
        music,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;

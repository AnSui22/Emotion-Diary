import { useNavigate } from "react-router-dom";

const DiaryTitle = ({ id, title }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  return (
    <div onClick={goDetail} className="info_wrapper">
      {title.slice(0, 25)}
    </div>
  );
};

export default DiaryTitle;

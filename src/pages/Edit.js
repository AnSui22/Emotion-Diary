import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 Edit 입니다.</p>
      <button
        onClick={() => {
          setSearchParams({ who: "sui" });
        }}
      >
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        home으로 이동
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};
export default Edit;

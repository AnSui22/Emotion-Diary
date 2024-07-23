const CheckItem = ({ check }) => {
  return (
    <div className="CheckItem">
      <div className="checkName">
        <input checked={check.isdone} type="checkbox" />
        <div>{check.content}</div>
      </div>
      <div className="checkdate">
        <div>{check.date}</div>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default CheckItem;

const CheckItem = ({ check, onUpdate, onDelete }) => {
  const onChangeCheck = () => {
    onUpdate(check.id);
  };

  const onDeleteClick = () => {
    onDelete(check.id);
  };

  return (
    <div className="CheckItem">
      <div className="checkName">
        <input
          onChange={onChangeCheck}
          checked={check.isdone}
          type="checkbox"
        />
        <div>{check.content}</div>
      </div>
      <div className="checkdate">
        <div>{check.date}</div>
        <button onClick={onDeleteClick}>삭제</button>
      </div>
    </div>
  );
};

export default CheckItem;

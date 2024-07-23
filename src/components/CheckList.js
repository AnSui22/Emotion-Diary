import { useState } from "react";
import CheckItem from "./CheckItem";

const CheckList = ({ checks, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredChecks = checks.filter((check) =>
    check.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="CheckList">
      <h2>Check List 검색</h2>
      <textarea
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      {filteredChecks.map((check) => {
        return (
          <CheckItem
            key={check.id}
            check={check}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default CheckList;

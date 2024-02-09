const WeatherItem = ({
  weather_id,
  weather_img,
  weather_descript,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={["Item", isSelected ? `Item_on` : `Item_off`].join(" ")}
      onClick={() => onClick(weather_id)}
    >
      <img src={weather_img} />
      <span>{weather_descript}</span>
    </div>
  );
};

export default WeatherItem;

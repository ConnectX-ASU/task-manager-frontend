import Loading from "../Loading/Loading";
import "./Switch.css";
export default function Switch({
  isOn,
  handleToggle,
  colorOne,
  colorTwo,
  id,
  status,
  position,
  loading,
}) {
  console.log(isOn ? colorOne : colorTwo);
  return (
    <div className={`flex justify-${position || "center"} items-center gap-3`}>
      {loading || status ? (
        <div className="switch-text">
          {loading ? <Loading className="loading--small" /> : status}
        </div>
      ) : (
        ""
      )}
      <div className="relative">
        <input
          checked={isOn}
          onChange={handleToggle}
          className="switch-checkbox hidden"
          id={id}
          type="checkbox"
        />
        <label
          style={{ background: isOn ? colorOne : colorTwo }}
          className="switch-label"
          htmlFor={id}
        >
          <span className={`switch-button`} />
        </label>
      </div>
    </div>
  );
}

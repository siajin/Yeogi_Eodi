import { BsCircleFill } from "react-icons/bs";

export default function PrintRoute({ route, rkey }) {
  return (
    <div className="PrintRoute" key={rkey}>
      <div className="iconWrapper">
        <div className="f1">
          <BsCircleFill />
        </div>
        <div className="line" />
        <div className="f2">
          <BsCircleFill />
        </div>
      </div>
      <div className="textWrapper">
        <div className="b3">{route.departure}</div>
        <div className="empty" />
        <div className="b4">{route.destination}</div>
      </div>
    </div>
  );
}

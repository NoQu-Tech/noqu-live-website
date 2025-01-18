import "./Usecase.css";
export default function Usecase({img,heading,content}) {
  return (
    <>
        <div className="usecase">
          <div className="usecase-img">
            <img src={img} alt="" />
          </div>
          <div className="usecase-content">
            <h5>{heading}</h5>
            <p>{content}</p>
          </div>
        </div>
    </>
  );
}

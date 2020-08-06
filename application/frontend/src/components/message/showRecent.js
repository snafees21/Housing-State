const showRecent = ({ name, message, time }) => {
  return (
    <React.Fragment>
      <div className="">
        <div className="card-body text-light">
          <span className="float-right">{time}</span>
          <legend>{name}</legend>
          <p>{message}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default showRecent;

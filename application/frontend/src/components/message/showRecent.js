
const showRecent = ({ name, message, time }) => {
  return (
    <React.Fragment>
      <div class="card-body m-2 text-white">
        <span class="float-right">{time}</span>
        <legend>{name}</legend>
        <p>{message}</p>
      </div>
    </React.Fragment>
  );
};
export default showRecent;

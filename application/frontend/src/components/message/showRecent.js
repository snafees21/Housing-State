const showRecent = ({ name, message }) => {
  return (
    <React.Fragment>
      <div class="card m-2">
        <div class="card container">
          <legend>{name}</legend>
          <p>{message}</p>
          <span class="text-right">11:30 PM</span>
        </div>
      </div>
    </React.Fragment>
  );
};
export default showRecent;

const showRecent = ({ name, message }) => {
  const deleteMessage = () => {
    /*axios
    .get('/api/deleteMessage', { params: query })
    .then((res) => {
    })
    .catch(() => {
      console.log("Failed");
    });
    */
  };
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

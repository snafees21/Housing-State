const message = ({ from_user, from_user_message, userID, time }) => {
  const factory = () => {
    if (from_user === userID) {
      return (
        <div class="card bg-primary message-reply">
          <div class="text-light font-weight-bold message-no-padding">
            {from_user}
            <div class="float-right text-dark text-secondary ml-5">{time} </div>
          </div>
          <hr />
          <div class="text-light">{from_user_message}</div>
        </div>
      );
    } else
      return (
        <div class="card bg-dark message-message">
          <div class="text-light font-weight-bold message-no-padding">
            {from_user}
            <div class="float-right text-secondary ml-5">{time} </div>
          </div>
          <hr />
          <div class="text-light">{from_user_message}</div>
        </div>
      );
  };

  return <div>{factory()}</div>;
};

export default message;

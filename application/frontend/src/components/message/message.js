const message = ({ from_user, to_user, from_user_message, userID, time }) => {
  const factory = () => {
    if (from_user === userID) {
      return (
        <div className="card bg-primary message-reply">
          <div className="text-light font-weight-bold message-no-padding">
            {from_user}
            <div className="float-left text-dark text-secondary mr-5">{time} </div>
          </div>
          <hr />
          <div className="text-light">{from_user_message}</div>
        </div>
      );
    } else
      return (
          <div className="card bg-dark message-message">
            <div className="text-light font-weight-bold message-no-padding">
              {from_user}
              <div className="float-right text-secondary ml-5">{time} </div>
            </div>
            <hr />
            <div className="text-light">{from_user_message}</div>
          </div>
      );
  };

  return (
    
    <div>
     {factory()}</div>
  );
};

export default message;

const Attendance = ({ data }) => {
  const days = Object.keys(data[Object.keys(data)[0]]);
  const values = Object.entries(data[Object.keys(data)[1]]);
  return (
    <>
      <h3>HELLO! {data[Object.keys(data)[0]]} </h3>
      <div className="container-fluid bg-light mt-4">
        <div className="text-center ">Attendance</div>
        <div className="container">
          <div className="row">
            <div className="col-sm p-3"></div>
            {values &&
              values.map((value, index) => (
                <div className="col-sm p-3" key={index}>
                  {value[0]}
                  <br />
                  {value[1].date}
                </div>
              ))}
          </div>
          <div className="row">
            <div className="col-sm p-3">FN</div>
            {values &&
              values.map((value, index) => (
                <div className="col-sm p-3" key={index}>
                  {value[1].fn === "present" ? (
                    <div className="w-25 h-100 bg-success"></div>
                  ) : (
                    <div className="w-25 h-100 bg-danger"></div>
                  )}
                </div>
              ))}
          </div>

          <div className="row">
            <div className="col-sm p-3">AN</div>
            {values &&
              values.map((value, index) => (
                <div className="col-sm p-3" key={index}>
                  {value[1].an === "present" ? (
                    <div className="w-25 h-100 bg-success"></div>
                  ) : (
                    <div className="w-25 h-100 bg-danger"></div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;

import "./BehavAnalytics.css";

const BehavAnalytics = () => {
  return (
    <div className="bg-light">
      <div className="text-center">Behavioral Analytics</div>

      <div className="d-flex align-items-end ">
        <div
          id="my-pie-chart-container "
          className="d-flex justify-content-start ms-4"
        >
          <div id="my-pie-chart"></div>
        </div>

        <div className="ms-1 p-2 ">
          <div class="d-flex  flex-column ">
            <div className="d-flex align-items-center ">
              <span
                style={{ height: "10px", width: "10px" }}
                className=" bg-success "
              ></span>
              <span className="ms-4">Good</span>
            </div>
            <div className="d-flex align-items-center">
              <span
                style={{ height: "10px", width: "10px" }}
                className=" bg-danger"
              ></span>
              <span className="ms-4">bad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehavAnalytics;

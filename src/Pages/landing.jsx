import BottomContainer from "../Main File/BottomContainer";
import TopContainer from "../Main File/TopContainer";
import CarouselContainer from "../Main File/CarouselContainer";
function Landing() {
  const currentPage = window.location.pathname;

  return (
    <div>
      {/* done header */}
      <header className="bg-white w-full flex justify-between items-center px-10 ">
        <div className="flex items-center w-48 h-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="285.377"
            height="77"
            viewBox="0 0 285.377 77"
          >
            <g
              id="Group_9738"
              data-name="Group 9738"
              transform="translate(-51.999 -34)"
            >
              <g
                id="Group_9679"
                data-name="Group 9679"
                transform="translate(-406.659 -28.333)"
              >
                <g
                  id="Group_9678"
                  data-name="Group 9678"
                  transform="translate(458.159 62.333)"
                >
                  <g
                    id="Group_9677"
                    data-name="Group 9677"
                    transform="translate(0 0)"
                  >
                    <g
                      id="Component_3_29"
                      data-name="Component 3 – 29"
                      transform="translate(0.5 0)"
                    >
                      <rect
                        id="Rectangle_97"
                        data-name="Rectangle 97"
                        width="35"
                        height="70"
                        transform="translate(39 4)"
                        fill="#2289ff"
                      />
                      <path
                        id="Subtraction_1"
                        data-name="Subtraction 1"
                        d="M78,77H0V0H78V77ZM6.24,5.723V71.277H71.76V5.723Z"
                        fill="#2289ff"
                      />
                      <path
                        id="Path_2912"
                        data-name="Path 2912"
                        d="M28.7-84.678A22.237,22.237,0,0,1,45-78.18a21.633,21.633,0,0,1,6.56,16,21.746,21.746,0,0,1-6.545,15.966,21.7,21.7,0,0,1-15.962,6.556A21.939,21.939,0,0,1,12.961-46.19,21.455,21.455,0,0,1,6.4-61.981,22.835,22.835,0,0,1,9.39-73.431a21.745,21.745,0,0,1,8.149-8.26A21.913,21.913,0,0,1,28.7-84.678Zm.189,4.166a17.656,17.656,0,0,0-9.017,2.479,17.828,17.828,0,0,0-6.654,6.677A18.566,18.566,0,0,0,10.83-62a17.488,17.488,0,0,0,5.3,12.9A17.457,17.457,0,0,0,28.894-43.83a18.334,18.334,0,0,0,9.236-2.42,17.328,17.328,0,0,0,6.624-6.619A18.6,18.6,0,0,0,47.133-62.2a18.143,18.143,0,0,0-2.378-9.229,17.762,17.762,0,0,0-6.7-6.6A18.124,18.124,0,0,0,28.894-80.511Zm31.263,39.77V-83.6h8.886q9.615,0,13.956,1.544a18.654,18.654,0,0,1,9.746,7.575,23.018,23.018,0,0,1,3.511,12.849A22.535,22.535,0,0,1,93.473-50.3a17.834,17.834,0,0,1-7.226,7.226Q81.8-40.741,73.792-40.741Zm4.108-4.05h4.953q8.886,0,12.324-1.106a14.213,14.213,0,0,0,7.6-5.662,17.427,17.427,0,0,0,2.768-10,18.339,18.339,0,0,0-3-10.6,15.11,15.11,0,0,0-8.362-6.026Q76.531-79.4,67.295-79.4h-3.03ZM104.589-83.6H129.15v4.2H108.871v13.432h20.1v4.2h-20.1v16.84h20.1v4.2H104.589Zm32.195,0h8.537a51.706,51.706,0,0,1,9.673.584,11.037,11.037,0,0,1,6.206,3.748,10.7,10.7,0,0,1,2.389,7.074,11.438,11.438,0,0,1-1.646,6.155,10.272,10.272,0,0,1-4.705,4.011,21.62,21.62,0,0,1-8.449,1.386l15.413,19.9h-5.3l-15.414-19.9h-2.421v19.9h-4.283Zm4.283,4.2v14.568l7.383.059a18.357,18.357,0,0,0,6.347-.816,6.605,6.605,0,0,0,3.21-2.608,7.249,7.249,0,0,0,1.153-4.007,6.945,6.945,0,0,0-1.167-3.919,6.5,6.5,0,0,0-3.064-2.52,18.621,18.621,0,0,0-6.3-.758ZM172.8-40.741V-83.6h.932l28.524,32.853V-83.6h4.225v42.859h-.961L177.224-73.195v32.453Z"
                        transform="translate(78.901 99.892)"
                        fill="#2289ff"
                      />
                      <rect
                        id="Rectangle_96"
                        data-name="Rectangle 96"
                        width="33"
                        height="65"
                        transform="translate(6 6)"
                        fill="#fff"
                      />
                      <g
                        id="Subtraction_2"
                        data-name="Subtraction 2"
                        transform="translate(8.821 8.358)"
                        fill="none"
                      >
                        <path d="M0,0H60.147V60.077H0Z" stroke="none" />
                        <path
                          d="M 1 0.9999923706054688 L 1 59.07650375366211 L 59.14717864990234 59.07650375366211 L 59.14717864990234 0.9999923706054688 L 1 0.9999923706054688 M 0 -7.62939453125e-06 L 60.14717864990234 -7.62939453125e-06 L 60.14717864990234 60.07650375366211 L 0 60.07650375366211 L 0 -7.62939453125e-06 Z"
                          stroke="none"
                          fill="#0954ab"
                        />
                      </g>
                      <path
                        id="Path_2913"
                        data-name="Path 2913"
                        d="M6.672-42.161l6.51-45.467h.738L32.4-50.321,50.71-87.628h.728l6.543,45.467H53.525L49.033-74.677,32.957-42.161H31.8L15.527-74.924,11.061-42.161Z"
                        transform="translate(6.649 101.83)"
                        fill="#fff"
                      />
                      <path
                        id="Subtraction_3"
                        data-name="Subtraction 3"
                        d="M4.389,45.468H0L6.51,0h.738L25.684,37.21v8.257h-.561L8.855,12.7,4.389,45.467Z"
                        transform="translate(13.491 14.203)"
                        fill="#2289ff"
                        stroke="rgba(0,0,0,0)"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <path
                id="Union_1"
                data-name="Union 1"
                d="M9916.353-6349.418a1.235,1.235,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9916.353-6349.418Zm-3.593,0a1.233,1.233,0,0,1,1.2-1.268,1.235,1.235,0,0,1,1.2,1.268,1.236,1.236,0,0,1-1.2,1.269A1.235,1.235,0,0,1,9912.76-6349.418Zm-3.165,0a1.235,1.235,0,0,1,1.2-1.268,1.233,1.233,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9909.595-6349.418Zm-3.594,0a1.232,1.232,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.234,1.234,0,0,1,9906-6349.418Zm10.352-3.806a1.236,1.236,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9916.353-6353.224Zm-3.593,0a1.235,1.235,0,0,1,1.2-1.269,1.236,1.236,0,0,1,1.2,1.269,1.236,1.236,0,0,1-1.2,1.269A1.235,1.235,0,0,1,9912.76-6353.224Zm-3.165,0a1.236,1.236,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9909.595-6353.224Zm-3.594,0a1.234,1.234,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.269A1.234,1.234,0,0,1,9906-6353.224Zm10.352-3.8a1.235,1.235,0,0,1,1.2-1.269,1.234,1.234,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.268A1.236,1.236,0,0,1,9916.353-6357.027Zm-3.593,0a1.234,1.234,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.236,1.236,0,0,1-1.2,1.268A1.235,1.235,0,0,1,9912.76-6357.027Zm-3.165,0a1.235,1.235,0,0,1,1.2-1.269,1.234,1.234,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.268A1.236,1.236,0,0,1,9909.595-6357.027Zm-3.594,0a1.233,1.233,0,0,1,1.2-1.269,1.234,1.234,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.268A1.234,1.234,0,0,1,9906-6357.027Zm10.352-3.806a1.236,1.236,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.234,1.234,0,0,1-1.2,1.268A1.235,1.235,0,0,1,9916.353-6360.833Zm-3.593,0a1.235,1.235,0,0,1,1.2-1.269,1.236,1.236,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.268A1.233,1.233,0,0,1,9912.76-6360.833Zm-3.165,0a1.236,1.236,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.233,1.233,0,0,1-1.2,1.268A1.235,1.235,0,0,1,9909.595-6360.833Zm-3.594,0a1.234,1.234,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.234,1.234,0,0,1-1.2,1.268A1.232,1.232,0,0,1,9906-6360.833Zm10.352-3.806a1.235,1.235,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9916.353-6364.639Zm-3.593,0a1.234,1.234,0,0,1,1.2-1.268,1.235,1.235,0,0,1,1.2,1.268,1.236,1.236,0,0,1-1.2,1.269A1.235,1.235,0,0,1,9912.76-6364.639Zm-3.165,0a1.236,1.236,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9909.595-6364.639Zm-3.594,0a1.233,1.233,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.234,1.234,0,0,1,9906-6364.639Zm10.352-3.326a1.235,1.235,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9916.353-6367.965Zm-3.593,0a1.234,1.234,0,0,1,1.2-1.268,1.235,1.235,0,0,1,1.2,1.268,1.236,1.236,0,0,1-1.2,1.269A1.235,1.235,0,0,1,9912.76-6367.965Zm-3.165,0a1.236,1.236,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9909.595-6367.965Zm-3.594,0a1.233,1.233,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.234,1.234,0,0,1,9906-6367.965Zm10.352-3.806a1.236,1.236,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.234,1.234,0,0,1-1.2,1.268A1.235,1.235,0,0,1,9916.353-6371.771Zm-3.593,0a1.235,1.235,0,0,1,1.2-1.269,1.236,1.236,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.268A1.233,1.233,0,0,1,9912.76-6371.771Zm-3.165,0a1.236,1.236,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.233,1.233,0,0,1-1.2,1.268A1.235,1.235,0,0,1,9909.595-6371.771Zm-3.594,0a1.234,1.234,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.234,1.234,0,0,1-1.2,1.268A1.232,1.232,0,0,1,9906-6371.771Zm10.352-3.8a1.237,1.237,0,0,1,1.2-1.269,1.236,1.236,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9916.353-6375.575Zm-3.593,0a1.236,1.236,0,0,1,1.2-1.269,1.237,1.237,0,0,1,1.2,1.269,1.236,1.236,0,0,1-1.2,1.269A1.235,1.235,0,0,1,9912.76-6375.575Zm-3.165,0a1.237,1.237,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9909.595-6375.575Zm-3.594,0a1.235,1.235,0,0,1,1.2-1.269,1.236,1.236,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.269A1.234,1.234,0,0,1,9906-6375.575Zm10.352-3.806a1.237,1.237,0,0,1,1.2-1.269,1.236,1.236,0,0,1,1.2,1.269,1.236,1.236,0,0,1-1.2,1.27A1.236,1.236,0,0,1,9916.353-6379.381Zm-3.593,0a1.236,1.236,0,0,1,1.2-1.269,1.237,1.237,0,0,1,1.2,1.269,1.236,1.236,0,0,1-1.2,1.27A1.235,1.235,0,0,1,9912.76-6379.381Zm-3.165,0a1.237,1.237,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.27A1.237,1.237,0,0,1,9909.595-6379.381Zm-3.594,0a1.235,1.235,0,0,1,1.2-1.269,1.236,1.236,0,0,1,1.2,1.269,1.235,1.235,0,0,1-1.2,1.27A1.234,1.234,0,0,1,9906-6379.381Zm10.352-3.8a1.236,1.236,0,0,1,1.2-1.268,1.235,1.235,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9916.353-6383.186Zm-3.593,0a1.235,1.235,0,0,1,1.2-1.268,1.236,1.236,0,0,1,1.2,1.268,1.236,1.236,0,0,1-1.2,1.269A1.235,1.235,0,0,1,9912.76-6383.186Zm-3.165,0a1.236,1.236,0,0,1,1.2-1.268,1.235,1.235,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9909.595-6383.186Zm-3.594,0a1.234,1.234,0,0,1,1.2-1.268,1.235,1.235,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.234,1.234,0,0,1,9906-6383.186Zm10.352-3.326a1.235,1.235,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.234,1.234,0,0,1-1.2,1.268A1.235,1.235,0,0,1,9916.353-6386.512Zm-3.593,0a1.234,1.234,0,0,1,1.2-1.268,1.235,1.235,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.268A1.234,1.234,0,0,1,9912.76-6386.512Zm-3.165,0a1.236,1.236,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.234,1.234,0,0,1-1.2,1.268A1.236,1.236,0,0,1,9909.595-6386.512Zm-3.594,0a1.233,1.233,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.234,1.234,0,0,1-1.2,1.268A1.233,1.233,0,0,1,9906-6386.512Zm10.352-3.8a1.236,1.236,0,0,1,1.2-1.27,1.236,1.236,0,0,1,1.2,1.27,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9916.353-6390.316Zm-3.593,0a1.235,1.235,0,0,1,1.2-1.27,1.236,1.236,0,0,1,1.2,1.27,1.236,1.236,0,0,1-1.2,1.269A1.235,1.235,0,0,1,9912.76-6390.316Zm-3.165,0a1.237,1.237,0,0,1,1.2-1.27,1.235,1.235,0,0,1,1.2,1.27,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9909.595-6390.316Zm-3.594,0a1.234,1.234,0,0,1,1.2-1.27,1.235,1.235,0,0,1,1.2,1.27,1.235,1.235,0,0,1-1.2,1.269A1.234,1.234,0,0,1,9906-6390.316Zm10.352-3.806a1.237,1.237,0,0,1,1.2-1.269,1.236,1.236,0,0,1,1.2,1.269,1.233,1.233,0,0,1-1.2,1.268A1.234,1.234,0,0,1,9916.353-6394.122Zm-3.593,0a1.236,1.236,0,0,1,1.2-1.269,1.237,1.237,0,0,1,1.2,1.269,1.234,1.234,0,0,1-1.2,1.268A1.233,1.233,0,0,1,9912.76-6394.122Zm-3.165,0a1.237,1.237,0,0,1,1.2-1.269,1.235,1.235,0,0,1,1.2,1.269,1.233,1.233,0,0,1-1.2,1.268A1.234,1.234,0,0,1,9909.595-6394.122Zm-3.594,0a1.235,1.235,0,0,1,1.2-1.269,1.236,1.236,0,0,1,1.2,1.269,1.233,1.233,0,0,1-1.2,1.268A1.232,1.232,0,0,1,9906-6394.122Zm10.352-3.8a1.236,1.236,0,0,1,1.2-1.27,1.236,1.236,0,0,1,1.2,1.27,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9916.353-6397.927Zm-3.593,0a1.235,1.235,0,0,1,1.2-1.27,1.236,1.236,0,0,1,1.2,1.27,1.236,1.236,0,0,1-1.2,1.269A1.235,1.235,0,0,1,9912.76-6397.927Zm-3.165,0a1.237,1.237,0,0,1,1.2-1.27,1.235,1.235,0,0,1,1.2,1.27,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9909.595-6397.927Zm-3.594,0a1.234,1.234,0,0,1,1.2-1.27,1.235,1.235,0,0,1,1.2,1.27,1.235,1.235,0,0,1-1.2,1.269A1.234,1.234,0,0,1,9906-6397.927Zm10.352-3.806a1.235,1.235,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.235,1.235,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9916.353-6401.732Zm-3.593,0a1.234,1.234,0,0,1,1.2-1.268,1.235,1.235,0,0,1,1.2,1.268,1.236,1.236,0,0,1-1.2,1.269A1.234,1.234,0,0,1,9912.76-6401.732Zm-3.165,0a1.236,1.236,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.234,1.234,0,0,1-1.2,1.269A1.236,1.236,0,0,1,9909.595-6401.732Zm-3.594,0a1.233,1.233,0,0,1,1.2-1.268,1.234,1.234,0,0,1,1.2,1.268,1.234,1.234,0,0,1-1.2,1.269A1.233,1.233,0,0,1,9906-6401.732Z"
                transform="translate(-9804.25 6447)"
                fill="#fff"
                opacity="0.51"
              />
            </g>
          </svg>
        </div>
        <nav className="flex">
          <a
            href="/"
            className={`px-4   hover:text-blue-1 ${
              currentPage === "/" ? "text-blue-1" : ""
            }`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`px-4  hover:text-blue-1 ${
              currentPage === "/about" ? "text-blue-1" : "text-black"
            }`}
          >
            About
          </a>
          <a
            href="/featured"
            className={`px-4   hover:text-blue-1 ${
              currentPage === "/featured" ? "text-blue-1" : "text-black"
            }`}
          >
            Featured
          </a>
          <a
            href="/contact"
            className={`px-4   hover:text-blue-1 ${
              currentPage === "/contact" ? "text-blue-1" : "text-black"
            }`}
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center">
          <button className="px-4  text-white bg-blue-1 py-2 px-9 rounded">
            LOGIN
          </button>
        </div>
      </header>
      <TopContainer />

      <CarouselContainer />

      <BottomContainer />
    </div>
  );
}

export default Landing;

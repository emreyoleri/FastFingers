import React from "react";

export const Score = (props) => {
  const { duration, accuracy, wordsPerMinute  } = props.score;
  return (
    <div>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Süre : {duration} sn</h5>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Doğruluk : % {accuracy} </h5>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">DKB : {wordsPerMinute} </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Score;

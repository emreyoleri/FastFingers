import React, { useState, useEffect } from "react";
const Results = () => {
  const [resultState, setResultState] = useState({
    scores: [],
  });
  useEffect(() => {
    setResultState({
      scores: JSON.parse(localStorage.getItem("scores")),
    });
  }, []);
  const deleteScore = (id) => {
    let newScores = resultState.scores.filter((score) => score.id !== id);
    localStorage.setItem("scores", JSON.stringify(newScores));
    setResultState({
      scores: JSON.parse(localStorage.getItem("scores")),
    });
  };
  if (resultState.scores.length > 0) {
    return (
      <div>
        <h2>Sonuçlarım</h2>
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Süre</th>
              <th scope="col">Doğruluk</th>
              <th scope="col">DKB</th>
              <th scope="col">Words Length</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {resultState.scores.map((item, index) => {
              const { duration, accuracy, wordsPerMinute, wordsLength } = item;
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{duration}</td>
                  <td>{accuracy}</td>
                  <td>{wordsPerMinute}</td>
                  <td>{wordsLength}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteScore(item.id)}
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    );
  } else {
    return <h2>Kaydedilmiş Skor Bulunmamaktadır.</h2>;
  }
};
export default Results;

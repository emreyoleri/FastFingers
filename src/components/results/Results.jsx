import React , {Component} from "react";

class Results extends Component {
  render() {
    let getLocalStorage = JSON.parse(localStorage.getItem("scores"));
    const clearLocalStorage = () => {
      localStorage.clear();
      localStorage.setItem("scores", JSON.stringify([]));
      getLocalStorage = JSON.parse(localStorage.getItem("scores"));
    };
    if (getLocalStorage && getLocalStorage.length > 0) {
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
              {getLocalStorage.map((item, index) => {
                const { duration, accuracy, wordsPerMinute, wordsLength } =
                  item;
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{duration}</td>
                    <td>{accuracy}</td>
                    <td>{wordsPerMinute}</td>
                    <td>{wordsLength}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
          <div className="text-center">
            <button className="btn btn-danger" onClick={clearLocalStorage}>
              Temizle
            </button>
          </div>
        </div>
      );
    } else {
      return <h2>Kaydedilmiş Skorunuz Bulunmamaktadır.</h2>;
    }
  }
}
export default Results;

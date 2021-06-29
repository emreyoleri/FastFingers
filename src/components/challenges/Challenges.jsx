import React, { useContext, useState } from "react";
import { Context } from "../../Contexts/Context";
export const Challenges = () => {
  const context = useContext(Context);
  const { challenges } = context.state;
  const { chooseText, addText, deleteText } = context;
  const [inpValue, setInpValue] = useState("");

  const changeInputValue = (e) => {
    setInpValue(e.target.value);
  };
  if (challenges.length > 0) {
    return (
      <div>
        <h2>Metinler</h2>

        <table class="table ">
          <thead>
            <tr>
              <th scope="col">Metin</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {challenges.map((challenge, index) => {
              return (
                <tr key={index}>
                  <td>{challenge.text}</td>
                  <td>
                    <button
                      onClick={() => chooseText(challenge.id)}
                      className="btn btn-success "
                    >
                      Seç
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteText(challenge.id);
                        setInpValue("");
                      }}
                      className="btn btn-danger"
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
        <form
          className="form-floating"
          onSubmit={(e) => {
            e.preventDefault();
            if (inpValue !== " " && inpValue) {
              addText(inpValue);
              setInpValue("");
            }
          }}
        >
          <input
            type="email"
            className="form-control mb-3"
            id="input"
            placeholder="Metin İçeriğini Yazınız"
            value={inpValue}
            onChange={(e) => changeInputValue(e)}
            autoComplete="off"
          />
          <label for="input">Metin</label>

          <button type="submit" className="btn btn-success">
            Metin Ekle
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2>
          Kaydedilmiş Metin Bulunmaktadır. Lütfen Yeni Bir Metin Ekleyiniz
        </h2>

        <form
          className="form-floating"
          onSubmit={(e) => {
            e.preventDefault();
            if (inpValue !== " " && inpValue) {
              addText(inpValue);
              setInpValue("");
            }
          }}
        >
          <input
            type="email"
            className="form-control mb-3"
            id="input"
            placeholder="Metin İçeriğini Yazınız"
            value={inpValue}
            onChange={(e) => changeInputValue(e)}
            autoComplete="off"
          />
          <label for="input">Metin</label>

          <button type="submit" className="btn btn-success">
            Metin Ekle
          </button>
        </form>
      </div>
    );
  }
};
export default Challenges;

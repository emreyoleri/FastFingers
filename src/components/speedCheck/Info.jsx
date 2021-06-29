import React from "react";

export const Info = (props) => {
  return (
    <div>
      <div class="card text-center border border-info">
        <div className="card-header">
          <h1>Klavye Hız Testi</h1>
        </div>
        <div class="card-body">
          <p>
            Alltaki metni kutucuğa girmeye başladığınızda süreniz başlayacaktır.
          </p>
          <p>
            Testi bitirmek için Example heading{" "}
            <span class="badge bg-danger">Ctrl + Enter</span> kombinizasyonunu
            kullanınız.
          </p>
          <p>
            Karakter sınırını aştığınızda test otomatik olarak sonlanacaktır.
          </p>
          <p>Testimizde büyük-küçük harf ayrımı yapılmaz.</p>
        </div>
        <div
          className="card-footer rounded-2  "
          style={{ height: "auto", fontSize: "20px", padding: "40px 10px" }}
        >
          {props.challenge}
        </div>
        {/* girilecek değer geliyor. */}
      </div>
    </div>
  );
};

export default Info;

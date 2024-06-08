import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./ConfirmationPage.css";

export default function ConfirmationPage() {
  // getting the id of the submitted order

  const { orderId } = useParams();

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // using the orderId to get the siparis and saving to siparis state

  const [siparis, setSiparis] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://656ba8eadac3630cf7284ca5.mockapi.io/api/orders/orders/" +
  //         orderId
  //     )
  //     .then((res) => setSiparis(res.data));
  // }, [orderId]);

  return (
    <section className="confirmationPage">
      <div className="container-sm">
        <div className="confirmation-page-content">
          <div className="top-content">
            <p className="slogan">lezzetin yolda</p>
            <p className="order-confirmed">sipariş alındı</p>
          </div>
          <div className="bottom-content">
            <p className="urun-title">{siparis.urun}</p>
            <div className="order-info-box">
              <p>
                <span className="info-title">Boyut:</span> {siparis.size}
              </p>
              <p>
                <span className="info-title">Hamur:</span> {siparis.type}
              </p>
              <p>
                <span className="info-title">
                  Ek Malzemeler:
                  {/* {siparis.ek_malzemeler?.map((item) => (
                    <span className="malzemeler">{Capitalize(item)}</span>
                  ))} */}
                  {siparis.ek_malzemeler &&
                    siparis.ek_malzemeler.map((item) => (
                      <span className="malzemeler">{Capitalize(item)}</span>
                    ))}
                </span>
              </p>
            </div>
            <div className="order-sum-box">
              <p className="sum-title">Sipariş Toplamı</p>
              <div className="sum-line">
                <p className="sum-line-title">Seçimler</p>
                <p className="sum-line-price">
                  {/* {siparis.ek_malzemeler?.length * 5}₺ */}
                  {siparis.ek_malzemeler &&
                    siparis.ek_malzemeler.length * 5 * siparis.adet}
                  ₺
                </p>
              </div>
              <div className="sum-line">
                <p className="sum-line-title">Toplam</p>
                <p className="sum-line-price">
                  {/* {siparis.adet * (siparis.ek_malzemeler.length * 5 + 85.5)}₺ */}
                  {siparis.ek_malzemeler &&
                    siparis.adet * (siparis.ek_malzemeler.length * 5 + 85.5)}
                  ₺
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

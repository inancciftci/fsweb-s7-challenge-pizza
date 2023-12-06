import React, { useState, useEffect } from "react";
import "./Form.css";
import formBanner from "../assets/adv-form-banner.png";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import * as Yup from "yup";

export default function Form() {
  const [formValid, setFormValid] = useState(false);

  // quantity

  const [quantity, setQuantity] = useState(1);
  const artiBir = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
    setSiparis({ ...siparis, adet: quantity + 1 });
  };
  const eksiBir = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setSiparis({ ...siparis, adet: quantity - 1 });
    }
  };

  const [siparis, setSiparis] = useState({
    urun: "Position Absolute Acı Pizza",
    size: "",
    type: "",
    ek_malzemeler: [],
    note: "",
    isim: "",
    adet: quantity,
    orderId: 0,
  });

  const formSchema = Yup.object().shape({
    size: Yup.string().required("Lütfen boyut seçiniz."),
    type: Yup.string().required("Lütfen hamur tipi seçiniz."),
    ek_malzemeler: Yup.array().required().min(4).max(10),
    note: Yup.string(),
  });

  const [errState, setErrState] = useState({
    size: "",
    type: "",
  });

  const ekMalzemeList = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalapeno",
    "Sarımsak",
    "Biber",
    "Kabak",
    "Ananas",
  ];

  let history = useHistory();

  const [siparisler, setSiparisler] = useState([]);

  // fetch Orders

  const fetchOrders = () => {
    axios
      .get("https://656ba8eadac3630cf7284ca5.mockapi.io/api/orders/orders")
      .then((res) => setSiparisler(res.data));
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  // malzemeler

  const [ekMalzeme, setEkMalzeme] = useState([]);

  const checkboxHandler = (e) => {
    const { value, checked } = e.target;
    const key = e.target.name;
    Yup.reach(formSchema, key)
      .validate(value)
      .then((res) => {
        setErrState({ ...errState, [key]: "" });
        // console.log("BAŞARILI SEÇİM");
      })
      .catch((err) => {
        setErrState({ ...errState, [key]: err.message });
        // console.log(err.message[0]);
      });

    if (checked) {
      setEkMalzeme([...ekMalzeme, value]);
      setSiparis({ ...siparis, ek_malzemeler: [...ekMalzeme, value] });
    }

    if (!checked) {
      setEkMalzeme((pre) => {
        return [...pre.filter((removed) => removed !== value)];
      });
      setSiparis({
        ...siparis,
        ek_malzemeler: ekMalzeme.filter((del) => del !== value),
      });
    }
  };

  // siparis

  const productPrice = 85.5;

  const inputChangeHandler = (e) => {
    const key = e.target.name;
    const inputVal =
      e.target.type === "checkbox" ? e.target.id : e.target.value;

    Yup.reach(formSchema, key)
      .validate(inputVal)
      .then((res) => {
        setErrState({ ...errState, [key]: "" });
        // console.log("BAŞARILI SEÇİM");
      })
      .catch((err) => {
        setErrState({ ...errState, [key]: err.message[0] });
        // console.log(errState[key]);
        // console.log(err.message[0]);
      });

    setSiparis({
      ...siparis,
      [e.target.name]: inputVal,
      orderId: siparisler.length + 1,
    });
  };

  useEffect(() => {
    formSchema.isValid(siparis).then((valid) => setFormValid(valid));
  }, [siparis, formSchema]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("yeni sipariş: ", siparis);
    axios
      .post(
        "https://656ba8eadac3630cf7284ca5.mockapi.io/api/orders/orders",
        siparis
      )
      .then((res) => {
        // console.warn("sipariş başarıyla kaydedildi!", res.data);
        history.push(`/siparis-onay/${siparis.orderId}`);
        window.scrollTo(0, 0);
      });
  };
  return (
    <div className="formpage">
      <div className="product-info">
        <div className="product-img">
          <img src={formBanner} alt="" className="form-img" />
        </div>
        <div className="container-sm">
          <div className="breadcrumbs">
            <NavLink className="navlinks" to="/">
              Anasayfa
            </NavLink>
            <span className="seperator">-</span>
            <NavLink className="navlinks active-link" to="/pizza">
              Sipariş Oluştur
            </NavLink>
          </div>
          <h3 className="product-title">Position Absolute Acı Pizza</h3>
          <div className="info-box">
            <h3 className="product-price">{productPrice}₺</h3>
            <div className="info-box-right">
              <div className="info">
                <p>4.9</p>
              </div>
              <div className="info">
                <p>(200)</p>
              </div>
            </div>
          </div>
          <div className="product-description">
            <p className="desc">
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={submitHandler} id="pizza-form">
        <div className="container-sm">
          <div className="size-and-type">
            <div className="size">
              <div className="section-title">
                <label htmlFor="size">
                  Boyut seç<span className="required"> *</span>
                </label>
              </div>
              <div className="section-options">
                <input
                  onChange={inputChangeHandler}
                  type="radio"
                  name="size"
                  id="size-1"
                  value="S"
                  className="radio"
                />
                <label htmlFor="size-1" className="label label-1">
                  S
                </label>
                <input
                  onChange={inputChangeHandler}
                  type="radio"
                  name="size"
                  id="size-2"
                  value="M"
                  className="radio"
                />
                <label htmlFor="size-2" className="label label-2">
                  M
                </label>
                <input
                  onChange={inputChangeHandler}
                  type="radio"
                  name="size"
                  id="size-3"
                  value="L"
                  className="radio"
                />
                <label htmlFor="size-3" className="label label-3">
                  L
                </label>
              </div>
            </div>
            <div className="type">
              <div className="section-title">
                <label htmlFor="type">
                  Hamur seç <span className="required">*</span>
                </label>
              </div>
              <div className="hamur-options">
                <select onChange={inputChangeHandler} name="type">
                  <option selected disabled>
                    -- Hamur Kalınlığı Seç --
                  </option>
                  <option value="İnce">İnce</option>
                  <option value="Klasik">Klasik</option>
                  <option value="Sarımsaklı">Sarımsaklı</option>
                </select>
              </div>
            </div>
          </div>
          <div className="additionals">
            <div className="additional-title">
              <h3 className="section-title">Ek Malzemeler</h3>
              <p className="additional-desc">
                En fazla 10 malzeme seçebilirsiniz. 5₺
              </p>
            </div>
            <div className="additional-options">
              {ekMalzemeList.map((malzeme) => (
                <div className="additional-box">
                  <input
                    onChange={checkboxHandler}
                    type="checkbox"
                    name="ek_malzemeler"
                    id={malzeme}
                    value={malzeme}
                  />
                  <label htmlFor={malzeme}>{malzeme}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="notes">
            <label htmlFor="note" className="section-title">
              Sipariş Notu
            </label>
            <textarea
              onChange={inputChangeHandler}
              name="note"
              id="note"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            ></textarea>
          </div>
          <div className="divider"></div>
          <div className="form-bottom">
            <div className="quantity">
              <button onClick={eksiBir} className="eksi">
                -
              </button>
              <input
                type="number"
                value={quantity}
                name="number"
                placeholder="1"
                className="number"
                min={1}
              />
              <button onClick={artiBir} className="arti">
                +
              </button>
            </div>
            <div className="total-and-submit">
              <div className="total">
                <h3 className="section-title">Sipariş Toplamı</h3>
                <div className="line-1">
                  <p>Seçimler</p>
                  <p>{ekMalzeme.length * 5 * quantity}₺</p>
                </div>
                <div className="line-2">
                  <p>Toplam</p>
                  <p>
                    {formValid
                      ? (productPrice + ekMalzeme.length * 5) * quantity
                      : "0₺"}
                  </p>
                </div>
              </div>
              <div className="submit">
                <button disabled={!formValid} type="submit">
                  Sipariş Ver
                </button>
                <p className={`error ${!formValid ? "visible" : null}`}>
                  <i class="fa-solid fa-circle-exclamation"></i> Lütfen zorunlu
                  alanlara dikkat ediniz.
                </p>
                <p
                  className={`error-2 ${
                    ekMalzeme.length < 4 || ekMalzeme.length > 10
                      ? null
                      : "dp-none"
                  }`}
                >
                  - En az 4, en fazla 10 adet ek malzeme seçebilirsiniz.
                </p>
                <p
                  className={`error-2 ${
                    siparis.size === "" ? null : "dp-none"
                  }`}
                >
                  - Lütfen pizza boyutu seçiniz.
                </p>
                <p
                  className={`error-2 ${
                    siparis.type === "" ? null : "dp-none"
                  }`}
                >
                  - Lütfen hamur tipini seçiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

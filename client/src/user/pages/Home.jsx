import React, { useState } from "react";
import md5 from "crypto-js/md5";
import PaymentModal from "../PaymentModal/PaymentModal";

const Home = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [productname, setProductname] = useState("");
  const [amount, setAmount] = useState("");

  const merchantSecret =
    "NDIyMjA5MjQ3ODM3MDU5MzU3NDIyMzM5MTY5OTk2MTU4NTY4NDU1Ng==";
  const orderId =
    Date.now().toString() + Math.random().toString(36).substr(2, 9);
  const currency = "LKR";
  const merchantId = "1222723";
  const hashedSecret = md5(merchantSecret).toString().toUpperCase();
  let amountFormated = parseFloat(amount)
    .toLocaleString("en-us", { minimumFractionDigits: 2 })
    .replaceAll(",", "");
  const hash = md5(
    merchantId + orderId + amountFormated + currency + hashedSecret
  )
    .toString()
    .toUpperCase();

  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <h5 className="card-header text-center">Payment form</h5>
          <div className="card-body">
            <form role="form">
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product name"
                  value={productname}
                  onChange={(e) => setProductname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Address</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>City</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <PaymentModal
                  // Use a unique value for the orderId
                  orderId={orderId}
                  name={productname}
                  amount={amount}
                  currency={currency}
                  hash={hash}
                  first_name={firstname}
                  last_name={lastname}
                  email={email}
                  phone={phone}
                  address={address}
                  city={city}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

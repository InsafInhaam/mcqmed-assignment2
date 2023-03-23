import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Sidebar from "../components/Sidebar";

const Payment = () => {
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/getPayment", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPayment(result);
      });
  }, [payment]);

  const handleDelete = (id) => {
    fetch(process.env.REACT_APP_API_URL + "/api/deletePayment/" + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success(result.message);
      });
  };

  return (
    <>
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar />
        {/* /#sidebar-wrapper */}
        {/* Page Content */}
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <div className="table-wrapper">
                    <div className="table-title">
                      <div className="row">
                        <div className="col-xs-6">
                          <h2>
                            Manage <b>Payments</b>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>
                            <span className="custom-checkbox">
                              <input type="checkbox" id="selectAll" />
                              <label htmlFor="selectAll" />
                            </span>
                          </th>
                          <th>Order Id</th>
                          <th>Item Name</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Address</th>
                          <th>City</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {payment.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td>
                                <span className="custom-checkbox">
                                  <input
                                    type="checkbox"
                                    id="checkbox1"
                                    name="options[]"
                                    defaultValue={1}
                                  />
                                  <label htmlFor="checkbox1" />
                                </span>
                              </td>
                              <td>{item.orderId}</td>
                              <td>{item.itemName}</td>
                              <td>{item.amount}</td>
                              <td>{item.status}</td>
                              <td>{item.firstname}</td>
                              <td>{item.lastname}</td>
                              <td>{item.email}</td>
                              <td>{item.phone}</td>
                              <td>{item.address}</td>
                              <td>{item.city}</td>
                              <td>
                                <a
                                  onClick={() => handleDelete(item.id)}
                                  className="delete"
                                  href="#"
                                >
                                  <i
                                    className="material-icons"
                                    data-toggle="tooltip"
                                    title="Delete"
                                  >
                                    
                                  </i>
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /#page-content-wrapper */}
      </div>
    </>
  );
};

export default Payment;

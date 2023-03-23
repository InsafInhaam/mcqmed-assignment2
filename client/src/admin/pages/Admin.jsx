import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Sidebar from "../components/Sidebar";

const Admin = () => {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/getAdmin", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setAdmin(result);
      });
  }, [admin]);

  const handleDelete = (id) => {
    fetch(process.env.REACT_APP_API_URL + "/api/deleteAdmin/" + id, {
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
                            Manage <b>Users</b>
                          </h2>
                        </div>
                        <div className="col-xs-6">
                          <a
                            href="/createadmin"
                            className="btn btn-success"
                            data-toggle="modal"
                          >
                            <i className="material-icons"></i>
                            <span>Add New Employee</span>
                          </a>
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
                          <th>Name</th>
                          <th>Email</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {admin.map((item) => {
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
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>
                                <a
                                  href={`/editadmin/${item.id}`}
                                  className="edit"
                                >
                                  <i
                                    className="material-icons"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  >
                                    
                                  </i>
                                </a>
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

export default Admin;

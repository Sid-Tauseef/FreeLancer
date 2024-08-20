import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Orders.css";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="orders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "something went  Wrong!"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
          <tbody>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>
           {  
            data.map(order=>(
            
            <tr key={order._id}>
              <td>
                <img
                  className="image"
                  src={order.img}
                  alt=""
                />
              </td>
              <td>{order.title}</td>
              <td>{order.price}</td>
              <td>
                <img className="message" src="./icons/message.png" alt="" />
              </td>
            </tr> ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../components/navigation/Header";

const SingleOrganization = () => {
  const { state } = useLocation();
  const [organization, setorganization] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://beta.chainraise.info/api/organizations/listing/${state.id}`)
      .then((result) => {
        console.log(result);
        setorganization(result.data.data);
        setloading(false);
      })
      .catch((err) => {
        toast.error("Something Went Wrong! Reload the Page", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }, []);

  return (
    <div>
      <ToastContainer />
      hello world
    </div>
  );
};

export default SingleOrganization;

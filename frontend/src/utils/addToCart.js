import axios from "axios";
import  useContext  from "react";
import { AuthClientContext } from "../context/ClientauthContext";

const url = "http://localhost:8800/api/cart_product/";
export const AddCart = async (p_id) => {
  const { currentClient } = useContext(AuthClientContext);
  console.log("clicked");
  try {
    const response = await axios.post(url, {
      c_id: currentClient.c_id,
      p_id,
    });
    //debugger;

    if (response.status === 200) {
      alert("item added to the cart"); // message
    }
  } catch (err) {
    console.log("error =====>", err);
  }
};

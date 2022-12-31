import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../Utlility/Axoisinstants";

const useProductById = (productId) => {
  const [product, setMeal] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let url = `product/${productId}`;

    const fetchMeals = async () => {
      setLoading(true);
      try {
        const { status, data } = await axiosInstance.get(url);
        if (status === 200) {
          setMeal(data);
          setLoading(false);
          setError("");
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };
    fetchMeals();
  }, [productId]);

  return {
    product,
    loading,
    error,
  };
};

export default useProductById;
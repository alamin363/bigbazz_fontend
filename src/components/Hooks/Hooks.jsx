import { useEffect, useState } from "react";
import { axiosInstance } from "../../Utlility/Axoisinstants";

const useProductData = (category) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let url = "allproduct";
    if (category) url = `${url}/${category}`;
    const FetchProducts = async () => {
      const fetchMeals = async () => {
        setLoading(true);
        try {
          const { status, data } = await axiosInstance.get(url);
          if (status === 200) {
            setProduct(data);
            setLoading(false);
            setError("");
          }
        } catch (error) {
          setLoading(false);
          setError(error.response.data.message);
        }
      };
      fetchMeals();
    };
  }, [category]);
  return {
    product,
    loading,
    error,
  };
};

export default useProductData;

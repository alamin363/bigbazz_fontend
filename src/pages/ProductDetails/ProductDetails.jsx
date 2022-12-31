import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Container, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useParams } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CounterBox } from "./ProductDetails.style";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import useProductById from "../../components/Hooks/useProductById";
const ProductDetails = () => {
  const { productId } = useParams();
  const { product, error, loading } = useProductById(productId);
  const [quantity, setQuantity] = useState(0);
  const addToCart = () => {};
  //   setCart((cart) => [
  //     ...cart,
  //     {
  //       ...meals.data,
  //       quantity,
  //     },
  //   ]);
  // const adjustQuantity = (type) => {
  //   setQuantity(type === "add" ? quantity + 1 : quantity - 1);
  //   setCart((cart) => {
  //     cart?.map((item) => {
  //       if (item._id === meals.data?._id) {
  //         return {
  //           ...item,
  //           quantity: type === "add" ? item.quantity + 1 : item.quantity - 1,
  //         };
  //       }
  //       return item;
  //     });
  //   });
  // };
  return (
    <Box>
      <Container>
        <Box
          sx={{
            my: 5,
            gap: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Mile details wil go here */}
          <Box sx={{ flex: 1 }}>
            <Stack spacing={4}>
              <Typography variant="h4" fontWeight={600}>
                {product?.data?.title}
              </Typography>
              <Typography
                variant="body"
                color="primary.grayText"
                sx={{ width: 450 }}
              >
                {product?.data?.description}
              </Typography>
              {/* price styling */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <Typography variant="h4" fontWeight={600}>
                  ${product?.data?.price}
                </Typography>
                {/*  */}

                <CounterBox>
                  <RemoveIcon />
                  <Typography variant="h5" sx={{ width: 20 }} fontWeight={600}>
                    {quantity}
                  </Typography>
                  <AddIcon />
                </CounterBox>
              </Box>
              <Button
                startIcon={<ShoppingCartOutlinedIcon />}
                sx={{
                  width: ["100%", "100%", "40%"],
                }}
              >
                Add
              </Button>
            </Stack>
            {/* slider ---- */}
            <Box sx={{ mt: 10 }}>
              <ImageSlider images={product?.data?.images} />
            </Box>
          </Box>
          {/* img go here */}
          <Box sx={{ flex: 1 }}>
            <img
              src={product?.data?.defaultImage}
              alt="mail"
              style={{
                maxWidth: "100%",
                width: "500px",
                Margin: "0 auto",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetails;

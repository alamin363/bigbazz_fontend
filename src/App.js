import { ThemeProvider } from "@emotion/react";
import "@fontsource/roboto/500.css";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { Theme } from "./components/Theme/Theme";
import { UserContext } from "./components/UserContext/UserContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { router } from "./pages/Router/Router";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <UserContext>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
      </UserContext>
    </ThemeProvider>
  );
}
export default App;

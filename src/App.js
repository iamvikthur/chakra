import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import WrapperComponent from "./WrapperComponent";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#024fc9",
    800: "#146af5",
    700: "#2977f2",
    600: "#337df2",
    500: "#4287f5",
  },
};

const theme = extendTheme({ colors });

function App() {
  const location = useLocation();
  return (
    <ChakraProvider theme={theme}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WrapperComponent />}>
          <Route index element={<Dashboard />} />
          <Route path="create" element={<Create />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={``} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;

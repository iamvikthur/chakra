import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";

const WrapperComponent = () => {
  return (
    <Grid templateColumns={"repeat(6, 1fr)"} bg={"gray.50"}>
      <GridItem
        as={"aside"}
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg={"brand.600"}
        minHeight={{ lg: "100vh" }}
        p={"30px"}
      >
        <Sidebar />
      </GridItem>
      <GridItem as={"main"} colSpan={{ base: 6, lg: 4, xl: 5 }} p={"40px"}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default WrapperComponent;

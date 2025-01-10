import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageViewTracker from "../PageViewTracker";

function Layout() {
  return (
    <>
    <PageViewTracker />
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;

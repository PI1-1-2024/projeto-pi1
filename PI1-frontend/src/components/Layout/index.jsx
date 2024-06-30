import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Sidebar";
import { isMobileDevice } from "../../utils";
import { Footer } from "../Footer";

export function Layout() {
  const isMobile = !!isMobileDevice();
  return (
    <Box position="relative" minH="100vh">
      <Grid
        templateAreas={`
"sidebar"
"main"
				`}
        position="relative"
        templateRows={"70px 1fr"}
        paddingBottom="80px"
      >
        <GridItem area="sidebar" px={isMobile ? 1 : 4} paddingY={2}>
          <Navbar />
        </GridItem>
        <GridItem area="main" px={isMobile ? 1 : 4}>
          <Outlet />
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
}

import { NAV_BAR_ITEMS } from "@/helpers/constants";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NextRouter } from "next/router";

interface NavBarProps {
  router: NextRouter;
}

export default function NavBar({ router }: NavBarProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ST Technical Assessment
          </Typography>
          <Box>
            {NAV_BAR_ITEMS.map((item) => (
              <Button
                key={item.name}
                sx={{ color: "white" }}
                onClick={() => router.push(item.url)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

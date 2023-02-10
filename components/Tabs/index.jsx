import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function CustomTabs({ posisionatedTab, setPosisionatedTab }) {
  const handleChange = (event, newValue) => {
    setPosisionatedTab(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "transparent" }}>
        <Tabs
          value={posisionatedTab}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="secondary"
          textColor="inherit"
          centered={true}
        >
          <Tab label="WHO I AM" {...a11yProps(0)} />
          <Tab label="PROJECTS" {...a11yProps(1)} />
          <Tab label="SKILLS" {...a11yProps(2)} />
          <Tab label="CONTACT" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
  );
}

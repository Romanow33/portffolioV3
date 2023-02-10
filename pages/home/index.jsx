import { useState } from "react";
import About from "../../components/About";
import Contact from "../../components/Contact/inde";
import NavBar from "../../components/NavBar";
import ProjectsContainer from "../../components/ProjectsContainer";
import SkillContainer from "../../components/SkillsContainer";
import TabPanel from "../../components/Tabs/TabPanel";

function HomePage() {
  const [posisionatedTab, setPosisionatedTab] = useState(0);
  return (
    <>
      <NavBar
        setPosisionatedTab={setPosisionatedTab}
        posisionatedTab={posisionatedTab}
      />

      <TabPanel value={posisionatedTab} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={posisionatedTab} index={1}>
        <ProjectsContainer />
      </TabPanel>
      <TabPanel value={posisionatedTab} index={2}>
        <SkillContainer />
      </TabPanel>
      <TabPanel value={posisionatedTab} index={3}>
        <Contact />
      </TabPanel>
    </>
  );
}

export default HomePage;

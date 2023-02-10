import { Grid, Paper } from "@mui/material";
import { skills } from "../../utils/skills";
import SkillCard from "../SkillCard";

export const SkillContainer = () => {
  return (
    <Paper
      elevation={24}
      sx={{
        padding: 3,
        backgroundColor: "black",
        border: "2px solid white",
        color: "white",
      }}
    >
      <Grid
        container
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        rowGap={6}
      >
        {skills.map((image, index) => {
          return <SkillCard key={index} image={image} />;
        })}
      </Grid>
    </Paper>
  );
};
export default SkillContainer;

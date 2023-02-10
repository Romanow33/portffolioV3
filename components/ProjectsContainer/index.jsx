import { Grid, Paper } from "@mui/material";
import ProjectCard from "../ProjectCard";
import { projects } from "../../utils/projects";
export const ProjectsContainer = () => {
  return (
    <Paper
      elevation={24}
      sx={{
        padding: 3,
      }}
    >
      <Grid
        container
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        rowGap={6}
      >
        {projects.map((project) => {
          return (
            <Grid item key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};
export default ProjectsContainer;

import { Box, Chip, Container, Stack, Typography } from "@mui/material";

export const CardFront = ({ project }) => {
  const { icon, title, tecnologies } = project;
  return (
    <>
      <Typography variant="cardTitle">{title}</Typography>
      {icon}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          rowGap: "5px",
          columnGap: "5px",
          justifyContent: "center",
        }}
      >
        {tecnologies?.map((skill) => {
          return (
            <Chip
              key={skill}
              label={<Typography variant="chipVariant">{skill}</Typography>}
              variant="outlined"
              size="small"
              sx={{ width: "auto" }}
            />
          );
        })}
      </Stack>
    </>
  );
};

export const CardBackSide = ({ project }) => {
  const { description, link, repo } = project;
  return (
    <>
      <Box
        sx={{
          border: "1px solid white",
          width: "100%",
          height: "auto",
          wordWrap: "break-word",
          mb: 2,
        }}
      >
        <Typography variant="subtitle1" sx={{ color: "white" }}>
          {description}
        </Typography>
      </Box>
      <Stack direction="row" justifyContent="space-around">
        {link && (
          <a
            href={`${link}`}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Ver App
            </Typography>
          </a>
        )}
        {repo ? (
          <a
            href={`${repo}`}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Ver Repo
            </Typography>
          </a>
        ) : (
          <Typography variant="subtitle1" sx={{ color: "white" }}>
            Repo privado
          </Typography>
        )}
      </Stack>
    </>
  );
};

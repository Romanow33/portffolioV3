import { Grid, Paper, styled, TextField, Button } from "@mui/material";
import { Stack } from "@mui/system";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "white",
      color: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
      color: "white",
    },
  },
});

export const Contact = () => {
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
      <form name="contact" method="POST" data-netlify="true" >
        <Grid
          container
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          rowGap={2}
          columnGap={1}
          sx={{ mb: 2 }}
        >
          <Grid item md={3} xs={12}>
            <CssTextField
              fullWidth
              label="Correo"
              InputLabelProps={{ style: { color: "#fff" } }}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <CssTextField
              fullWidth
              label="Nombre"
              InputLabelProps={{ style: { color: "#fff" } }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <CssTextField
            fullWidth
            label="Asunto"
            InputLabelProps={{ style: { color: "#fff" } }}
          />
        </Grid>
        <CssTextField
          fullWidth
          multiline
          rows={4}
          label="Mensaje"
          InputLabelProps={{ style: { color: "#fff" } }}
        />
        <Stack
          sx={{ width: "100%" }}
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "200px",
              color: "black",
              backgroundColor: "white",
              "&:hover": { backgroundColor: "black", color: "white" },
            }}
          >
            Enviar
          </Button>
        </Stack>
      </form>
      <Stack
        sx={{ width: "auto", marginTop: 4 }}
        justifyContent="space-around"
        alignItems="center"
        direction="row"
      >
        <a
          href="https://drive.google.com/file/d/1eoXbDU4keOTwS1Ho2nZGtxkAbp_-zBzh/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              width: "auto",
              color: "white",
              backgroundColor: "black",
              "&:hover": { backgroundColor: "white", color: "black" },
            }}
          >
            Desdcargar CV Ingles
          </Button>
        </a>
        <a
          href="https://drive.google.com/file/d/17npbek2y39in2kG5oA2_RkaPjp9hqtgz/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          download
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              width: "auto",
              color: "white",
              backgroundColor: "black",
              "&:hover": { backgroundColor: "white", color: "black" },
            }}
          >
            Descargar cv español
          </Button>
        </a>
      </Stack>
      <Stack
        sx={{ width: "auto", marginTop: 4 }}
        justifyContent="space-around"
        alignItems="center"
        direction="row"
      >
        <a
          href="https://drive.google.com/file/d/1eoXbDU4keOTwS1Ho2nZGtxkAbp_-zBzh/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          download
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              width: "auto",
              color: "white",
              backgroundColor: "black",
              "&:hover": { backgroundColor: "white", color: "black" },
            }}
          >
            Mi GitHub
          </Button>
        </a>
        <a
          href="https://drive.google.com/file/d/17npbek2y39in2kG5oA2_RkaPjp9hqtgz/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          download
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              width: "auto",
              color: "white",
              backgroundColor: "black",
              "&:hover": { backgroundColor: "white", color: "black" },
            }}
          >
            mi linkedin
          </Button>
        </a>
      </Stack>
    </Paper>
  );
};
export default Contact;

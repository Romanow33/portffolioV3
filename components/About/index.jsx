import { Divider, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import aboutImage from "../../public/mebw.png";

export const About = () => {
  return (
    <Paper
      elevation={24}
      sx={{
        padding: { xs: 2, md: 2 },
      }}
    >
      <Grid
        container
        direction={{ xs: "column", lg: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="title1"
            sx={{
              p: { xs: 0, md: 0 },
              display: { sm: "inherit", xs: "none" },
            }}
          >
            IGNACIO ROMANOW - WEB DEVELOPER
          </Typography>
          <Typography
            variant="title1"
            sx={{ p: 2, display: { sm: "none", xs: "flex" }, fontSize: "20px" }}
          >
            IGNACIO ROMANOW WEB DEVELOPER
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          p={{ lg: 4, md: 2 }}
          variant="horizontal"
          width={"100%"}
        >
          <Divider />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            padding: 3,
            borderRadius: "3%",
            backgroundColor: "white",
            textAlign: { xs: "center", md: "left" }
          }}
        >
          <Typography variant="title1" sx={{ fontsize: "40px", mb: "50px" }} gutterBottom>
            {"{"}Hola soy Nacho!
          </Typography>
          <br />
          <br />

          <Typography variant="subtitle1" sx={{ fontsize: "40px", }}>
            {"<"} Naci en Buenos Aires, Argentina y actualmente recido aqui.{" "}
            <br />
            Amo la comida, la musica y por supuesto la informatica.
            <br /> Pase por muchos rubros e inclusive estudie gastronomia pero
            no queria dedicarme a eso toda la vida.
            <br /> Por eso de manera autodidacta comence a introducime en el
            mundo del desarrollo, para mas tarde cursar el Bootcamp
            <br /> "soy henry" que termino de consolidar mis conocimientos
            previos y agregar nuevos que mas tarde me servirian para iniciar mi
            carrera en "start7" la primera empresa donde ejerci como
            desarrollador, mas tarde fui contratado en "pancake" consolidando el
            inicio de mi carrera en este mundo que tanto me gusta {"/>"}
          </Typography>
          <br />
          <Typography variant="title1" sx={{ fontsize: "40px", alignSelf: "center", width: "100%" }} gutterBottom>
            Gracias por pasar!{"}"}
          </Typography>
        </Grid>
        <Grid item xs={1} ml="100px">
          <Divider
            orientation="vertical"
            sx={{
              height: "400px",
              width: "min-content",
              display: { xs: "none", xl: "flex" },
            }}
          />
        </Grid>

        <Grid sx={{ filter: "drop-shadow(-1px 10px 10px #000)" }} item xs={5}>
          <Grid
            component="div"
            height={{ md: 450, xs: 200 }}
            width={{ md: 450, xs: 200 }}
          >
            <Image
              src={aboutImage}
              style={{
                backgroundPosition: "center",
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
              alt="Profile Image"
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default About;

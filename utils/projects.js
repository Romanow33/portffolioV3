import ChairIcon from "@mui/icons-material/Chair";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import HailIcon from "@mui/icons-material/Hail";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FlagIcon from "@mui/icons-material/Flag";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
export const projects = [
  {
    id: 7,
    title: "Bath Bombs shop",
    icon: <ShoppingBagIcon sx={{ color: "wihte", fontSize: "150px" }} />,
    tecnologies: ["Shopify", "Liquid", "React"],
    description: `Storefront React & Shopify`,
    link: "https://bathboombs.netlify.app/",
    repo: "https://github.com/Romanow33/shopify-reactt",
  },
  {
    id: 1,
    title: "Pancake Live",
    icon: <ChairIcon sx={{ color: "wihte", fontSize: "150px" }} />,
    tecnologies: ["ReactJS", "AWS", "MaterialUi"],
    description: `Trabaje junto a un equipo en la creacion, limpieza y mantenimiento de codigo para la aplicacion "Pancake Live" una aplicacion de meeting online de asistencia en vivo para diesño de interiores. `,
    link: "https://www.pancake.live/",
    repo: "",
  },
  {
    id: 2,
    title: "Amplify Notes",
    icon: <NoteAddIcon sx={{ color: "wihte", fontSize: "150px" }} />,
    tecnologies: ["ReactJS", "AWS", "MaterialUi"],
    description: `Aplicacion de notas como prueba tecnica realizada en 48hs. Donde aprendi a implementar AWS como Amplify, IAM y DynamoDb `,
    link: "https://master.dhf95nyou9c31.amplifyapp.com/",
    repo: "https://github.com/Romanow33/amplifynotes/tree/master",
  },
  {
    id: 2,
    title: "Movies APP",
    icon: <MovieFilterIcon sx={{ color: "wihte", fontSize: "150px" }} />,
    tecnologies: [
      "ReactJS",
      "React Query",
      "React Infinite Scroll",
      "Css Modules",
    ],
    description: `Aplicacion de practica, para consolidar conocimientos en react sobre la consumición de apis, Css Modules y la implementacion de librerias de alto rendiemiento como "React Query", "React Ifinite Scroll". `,
    link: "https://ignacio-movies.netlify.app/",
    repo: "https://github.com/Romanow33/MovieApp",
  },

  {
    id: 3,
    title: "Senior Talent",
    icon: <HailIcon sx={{ color: "wihte", fontSize: "150px" }} />,
    tecnologies: ["ReactJS", "MaterialUi", "Wordpress integration"],
    description: `Diseñe y desarrolle completamente la estructura front-end para la aplicacion "Senior talent". Uno de los proyectos que me fueron asignados durante mi trabajo en "Start7".`,
    link: "https://seniortalent.cl/",
  },

  {
    id: 4,
    title: "El librero de Mario",
    icon: <MenuBookIcon sx={{ color: "wihte", fontSize: "150px" }} />,
    tecnologies: ["ReactJS", "MongoDB", "Express", "NodeJS", "Css"],
    description: `E-commerce realizado en equipo durante soy henry bootcamp. Esta app desarrollada con el stack "MERN" cuenta con CRUD, autenticacion, Crud de usuario, pasarela de pago y proteccion de rutas.`,
    link: "https://el-librero.netlify.app/",
    repo: "https://github.com/Romanow33/mario-s-bookcase",
  },

  {
    id: 5,
    title: "Project countries",
    icon: <FlagIcon sx={{ color: "wihte", fontSize: "150px" }} />,
    tecnologies: ["ReactJS", "PostrgeSQL", "Express", "NodeJS", "Css"],
    description: `Mi primera fullstack app realizada para henry bootcamp de manera individual. Precargando una BD con datos de una api para devolverlos con mi propia API, con CRUD completo y filtrado de datos en el front-end`,
    repo: "https://github.com/Romanow33/countryProject",
  },
  {
    id: 6,
    title: "ClimApp",
    icon: <ThunderstormIcon sx={{ color: "wihte", fontSize: "150px" }} />,
    tecnologies: ["ReactJS", "Css"],
    description: `Simple Page Aplication para ver el clima de ciudades, es eso, simple!`,
    link: "https://romanow-climapp33.netlify.app/",
    repo: "https://github.com/Romanow33/wheaterApp",
  },

];

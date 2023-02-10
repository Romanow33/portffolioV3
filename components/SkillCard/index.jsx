import { Card, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const SkillCard = ({ image }) => {
  console.log(image);
  return (
    <Stack>
      <Card
        sx={{
          width: "200px",
          height: "200px",
          backgroundColor: "black",
          border: "2px solid white",
        }}
      >
        <Image
          src={image.img}
          style={{
            backgroundPosition: "center",
            objectFit: "cover",
            width: "100%",
            height: "auto",
            filter: "invert(100%)",
          }}
          width={200}
          height={200}
          alt="Profile Image"
        />
      </Card>
      <Typography
        variant="subtitle1"
        color="white"
        sx={{ textAlign: "center" }}
      >
        {image.title}
      </Typography>
    </Stack>
  );
};
export default SkillCard;

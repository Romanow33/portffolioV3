import { Card, CardContent } from "@mui/material";

export const CardComponent = ({ children, bgColor }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: bgColor,
        boxShadow: "2px 14px 14px 0px rgba(0,0,0,0.75)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <CardContent
        sx={{
          textAlign: "center",
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default CardComponent;

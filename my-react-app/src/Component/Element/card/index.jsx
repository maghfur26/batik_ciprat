import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";

export default function AreaCard({ image }) {
  return (
    <Card sx={{ maxWidth: 146 }}>
      <CardActionArea>
        <CardMedia className="h-[162px]" component="img" image={image} alt="top_saller" />
        <CardContent className="text-sm flex flex-col gap-1">
          <Typography gutterBottom variant="h5" align="center" sx={{fontSize: 14, fontWeight: "bold"}}>
             Top Product
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize: 12}}>
            Prize: 50$
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize: 12}}>
            Stock: 10
          </Typography>
          <Rating name="size-small" defaultValue={4} size="small" className="mt-4" readOnly/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

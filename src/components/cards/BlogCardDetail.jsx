import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";

const BlogCardDetail = () => {
  const { blogDetail } = useSelector((state) => state.blog);

  console.log(blogDetail);
  return (
    <div className="flex justify-center">
      <Card sx={{ maxWidth: 745 }}>
        <CardMedia component="img" alt="green iguana" height="140" image={blogDetail.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {blogDetail.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {blogDetail.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">eye</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default BlogCardDetail;

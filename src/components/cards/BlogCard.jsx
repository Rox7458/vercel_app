import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useAuthCall from "../../hook/useAuthCall";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { blogSuccess } from "../../features/BlogSlice";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  //! BLOG DETAIL AUTH
  const blogDetailCheck = () => {
    if (loading) {
      dispatch(blogSuccess(blog));
      navigate("/blogcardetail");
    } else {
      navigate("/login");
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="green iguana" height="140" image={blog.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {blog.content.substring(0, 90)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">eye</Button>
        <Button size="small" onClick={() => blogDetailCheck()}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;

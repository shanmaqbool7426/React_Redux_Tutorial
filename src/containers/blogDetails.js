import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedBlog,
  removeSelectedBlog,
} from "../redux/actions/blogsActions";
const BlogDetails = () => {
  const { blogId } = useParams();
  let blog = useSelector((state) => state.blog);
  const { Article, Image, Subtitle, Title } = blog;
  const dispatch = useDispatch();
  const fetchBlogDetail = async (id) => {
    const response = await axios
      .get(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedBlog(response.data));
  };

  useEffect(() => {
    if (blogId && blogId !== "") fetchBlogDetail(blogId);
    return () => {
      dispatch(removeSelectedBlog());
    };
  }, [blogId]);
  return (
    <div className="ui grid container">
      {Object.keys(blog).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="content-detail">
            <h1>Should bay a car or lease a new car ?</h1>
            <p className="mb-4">{`${Subtitle} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop `}</p>
          </div>
          <img
            src={"https://source.unsplash.com/user/c_v_r"}
            class="card-img-top"
            alt="..."
            className="first-img"
          />
          <div className="blog-section content-detail1">
            <h1 className="m-3"> {Title}</h1>
            <p className="m-4">{`${Subtitle} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}</p>
            <p className="m-4">{`${Subtitle} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}</p>
            <img
              src={Image}
              class="card-img-top"
              alt="..."
              className="second-img"
            />
            <p className="m-4">{`${Subtitle} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}</p>
            <p className="m-4">{`${Subtitle} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}</p>
          </div>
          {/* <img src={Image} class="card-img-top" alt="..."/> */}
          {/* <h1>{Title}</h1>
<h1>{Subtitle}</h1> */}
        </>
      )}
    </div>
  );
};

export default BlogDetails;

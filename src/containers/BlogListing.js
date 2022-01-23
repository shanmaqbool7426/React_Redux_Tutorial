import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBlog } from "../redux/actions/blogsActions";
import BlogComponent from "./blogComponent";

const BlogPage = () => {
  // const blogs = useSelector((state) => state.allblogs.blog);
  const dispatch = useDispatch();
  const fetchBlogs = async () => {
    const response = await axios
      .get(" https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setBlog(response.data));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="ui grid container">
      <div class="hero row flex-md-row-reverse no-gutters  text-light">
        <div class="col-md-6 hero bg-black">
          <h2>Diognose Car Problems If You Don't Know Much About Cars</h2>
          <p>
            This is a hero, but in split mode, and reversed, although still
            consistent with mobile view!
          </p>
        </div>
        <h1 class="col-md-6 hero hero-has-background">OUR BLOG.</h1>
      </div>

      <div className="container-fluid">
        <div class="row">
          <div class="col-12 mt-3">
            <div class="card">
              <div class="card-horizontal">
                <img
                  class="horizental-img"
                  src="https://source.unsplash.com/user/c_v_r"
                  alt="Card image cap"
                />
                <div class="card-body horizental-text">
                  <h4 class="card-title">
                    Should bay a new car or release a new car in 2021 ?
                  </h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <BlogComponent />
      </div>

      <button
        type="button"
        class=" btn btn-dark learn-more margin-auto p-3 font-weight-bold  "
      >
        Load More
      </button>
    </div>
  );
};

export default BlogPage;

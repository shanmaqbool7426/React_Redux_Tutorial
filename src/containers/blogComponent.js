import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogComponent = () => {
  const blogs = useSelector((state) => state.allBlogs.blogs);
  const renderList = blogs.map((blog) => {
    const { id, Title, Image, Subtitle } = blog;

    return (
      <>
        <div className="col-md-4" key={id}>
          <Link to={`/blog/${id}`}>
            <div class="card" >
              <img src={Image} class="card-img-top" alt="..." />
              <div class="card-body  text-dark">
                <div className="d-flex justify-content-md-between">
                  <p>Posted on octuber 6th  2021</p>
                  <p><i class="fad fa-eye"></i> 564 views</p>
                </div>
                <h3 class="card-title m-2">{Title}</h3>
                <p class="card-text mt-3">{Subtitle}.</p>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  });
  return <>{renderList}</>;
};

export default BlogComponent;

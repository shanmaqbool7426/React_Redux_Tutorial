import React from "react";

const Header = () => {
  return (
    // <div className="ui fixed menu">
    //   <div className="ui container center">
    //     <h2>FakeShop</h2>
    //   </div>
    // </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container" >
    <a class="navbar-brand" href="#">finsweet</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end " id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto ">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item ml-4">
          <a class="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li class="nav-item ml-4">
          <a class="nav-link active" aria-current="page" href="#">Service </a>
        </li>
        <li class="nav-item ml-4">
          <a class="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
        <li class="nav-item ml-4">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
       
      </ul>

    </div>
  </div>
</nav>
  );
};

export default Header;

import React, { Component } from "react";

import axios from "axios";
import ReactstrapImageGallery from "./ReactstrapImageGallery";

// const URL = "https://jsonplaceholder.typicode.com/photos";


class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(res => this.setState({ images: res.data.slice(0, 10) }));
  }

  render() {
    const { images } = this.state;
    return <ReactstrapImageGallery images={images} limit={12} />;
  }
}

// render(document.getElementById("root"));
export default Gallery;
import React from "react";
import { db } from "../firebase";

export default class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    db.collection("videos")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ videos: data });
      });
  }

  render() {
    const { videos } = this.state;
    return (
      <div className="row">
        <h2>Videos</h2>
        {videos.map((video, index) => (
          <div key={index}>
            <p>{video.title}</p>
            <p>{video.tags}</p>
          </div>
        ))}
      </div>
    );
  }
}

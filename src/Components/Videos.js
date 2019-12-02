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
        //console.log(data);
        this.setState({ videos: data });
      });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <h2>Videos</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Media</th>
              <th>Guests</th>
              <th>Series</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video, index) => (
              <tr key={index}>
                <td>{video.title}</td>
                <td>{video.mediaDiscussed}</td>
                <td>{video.appearing}</td>
                <td>{video.tags}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

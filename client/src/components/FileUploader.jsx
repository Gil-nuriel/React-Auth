import React, { Component } from "react";
import axios from "axios";

export class FileUploader extends Component {
  handleSubmit = () => {
    axios.defaults.headers.common["x-auth-token"] = localStorage.getItem(
      "token"
    );
    axios
      .get("http://localhost:5000/upload", {
        token: localStorage.getItem("token")
      })
      .then(res => {
        if (res.status === 200) alert("authorize");
      })
      .catch(err => {
        alert("not authorize");
      });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-lg btn-secondary text-uppercase mt-5"
          onClick={this.handleSubmit}
        >
          Check Authirization to the server
        </button>
      </div>
    );
  }
}

export default FileUploader;

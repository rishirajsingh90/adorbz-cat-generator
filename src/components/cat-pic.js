import React from "react";

const catApi = "https://api.thecatapi.com/v1/images/search";

export class CatPic extends React.Component {
  constructor() {
    super();
    this.state = {
      catUrl: ""
    };
  }

  componentDidMount() {
    this.fetchCatPicAndSetState();
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return this.state.catUrl ? <img src={this.state.catUrl} /> : <div />;
  }

  fetchCatPicAndSetState() {
    fetch(catApi, { method: "GET" })
      .then(data => data.json())
      .then(data =>
        this.setState({
          catUrl: data[0].url
        })
      );
  }
}

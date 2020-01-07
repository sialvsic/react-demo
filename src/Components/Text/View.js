import React, { Component } from "react";
import "./index.scss";

const parseToDOM = data => {
  return data;
};

class Text extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  componentDidMount() {
    let node = this.node.current;

    node.innerHTML = parseToDOM(this.props.data);
  }

  render() {
    const { name, job, time } = this.props.author;

    return (
      <div className="editor-display">
        <h1>{this.props.title}</h1>
        <div className="author">
          <div className="info">
            <div className="mask"></div>
            <div className="description">
              <div>
                <span className="name">{name}</span>
              </div>
              <div className="bottom">
                <span className="job">{job}</span>
                <span className="dot"></span>
                <span className="time">{time}</span>
              </div>
            </div>
          </div>
          <div className="share">
            <span className="circle">t</span>
            <span className="circle">f</span>
          </div>
        </div>
        <div ref={this.node}></div>
      </div>
    );
  }
}

const data =
  "<div><img src='https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=60' alt='body of sun set'/></div></div><p style='color:red'>I recently came back from a 3-week adventure backpacking around Europe. I walked the cobblestone roads Julius Caesar did over 2,000 years ago, celebrated the San Juan Festival in Barcelona while dodging fireworks on the crowded beaches illuminated by bonfires, watched men competitively dive from the top of Copenhagen’s Opera House into the city’s harbor, and wandered into the March for Europe protest around Parliament Square in London.</p>";

class View extends Component {
  render() {
    return (
      <div>
        <Text
          title="Travel Solo: The Best Thing You Can Do for Yourself"
          author={{
            name: "Steven Ramos",
            job: "Photographer",
            time: "December 19, 2019"
          }}
          data={data}
        />
      </div>
    );
  }
}

export default View;

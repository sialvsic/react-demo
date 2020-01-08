import React, { Component } from "react";
import "./index.scss";
import loading from "../../resources/loading.svg";

function onClick() {
  console.log("click me");
}

const parseToDOM = data => {
  //解析data-type 为对应的class
  //添加相关的dom元素，比如 button按钮
  //添加loading
  //整个声音的链接？
  //follow who?
  //

  console.log(data);

  const reg = /<div class='loading'><\/div>/g;

  //添加loading
  data = data.replace(reg, function(a) {
    console.log(a);
    return `
      <div class='loading'>
      <img src=${loading} alt="loading"/>
      </div>`;
  });

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

    const img = document.querySelector(".loading img");
    img.addEventListener("click", onClick);
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
  `<div class='img-container'><img src='https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=60' alt='body of sun set' data-type='cover'/></div></div>` +
  `<p style=''>I recently came back from a 3-week adventure backpacking around Europe. I walked the cobblestone roads Julius Caesar did over 2,000 years ago, celebrated the San Juan Festival in Barcelona while dodging fireworks on the crowded beaches illuminated by bonfires, watched men competitively dive from the top of Copenhagen’s Opera House into the city’s harbor, and wandered into the March for Europe protest around Parliament Square in London.</p>` +
  `<div class='img-container'><img src='https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=60' alt='body of sun set' data-type='cover'/><div style='text-align: center;color: #9faebc; font-size: 14px;'>body of water besides mountain</div></div></div>` +
  `<p style=''>For a majority of this trip, I traveled with a group of friends. It was never a constant group — some arrived later while others planned on staying for only a week — but there was always at least one other person with me.</p>` +
  `<div class='album' data-type='album'><div class='img'><img src="http://fdfs.xmcdn.com/group72/M05/58/30/wKgO0F4VPJPQU-pfAAEABlCO9xQ608.jpg" alt="" data-type='album-img'/></div><div class='content' data-type='content'><span class='title' data-type='title'>Daily Breath with Deepak ChopraDaily Breath with Deepak ChopraDaily Breath with Deepak Chopra</span><span class='sub-title' data-type='sub-title'>Infinite Potential Media, LLC</span></div><div class='button'><button>Follow</button></div></div>` +
  `<h2>Set Out Now</h2>` +
  `<p>Traveling by yourself to a foreign country is unlike any experience. Placing yourself in an unfamiliar culture challenges you in ways you would not know of until you have experienced it.<br/><br/>I consider myself an independent person who often enjoys being on her own. My happy place is on an empty beach alone with a good book for hours. But this? This was more than just savoring some alone time; it was relying on only my abilities in an unfamiliar place.</p>` +
  `<div class='loading'></div>` +
  `<p>I could feel the fear of being in a foreign country alone spreading from my mind downwards to my heart and gut, my heartbeat quickening and my core hollowing out for the fear to settle comfortably in.</p>` +
  `<p>Whether it is boarding a plane to fly across the Atlantic or hopping on a bus to go to a nearby town you’ve never been to, push your comfort levels by going alone. Let your feet decide where to go without the help of Google Maps. Sit at the bar of a restaurant. Make it a mission to meet new people, whether it be organically or with the help of the digital world (e.g. Backpackr, Meetup, EatWith, and, yes, Tinder).</p>` +
  `<div class='episode' data-type='album'><div class='img'><img src="http://fdfs.xmcdn.com/group72/M05/58/30/wKgO0F4VPJPQU-pfAAEABlCO9xQ608.jpg" alt="" data-type='episode-img'/></div><div class='content' data-type='content'><span class='title' data-type='title'>From UFOs to psychic powers and government conspiracies, history is riddled</span><span class='sub-title' data-type='sub-title'>iHeartRadio & HowStuffWorks</span></div><div class='button'><button><span class='play'></span></button></div></div>` +
  `<div><span class='tag'>Travel</span><span class='tag'>Life</span><span class='tag'>Wanderlust</span><span class='tag'>Life Lessons</span><span class='tag'>Life Lessons</span><span class='tag'>Life Lessons</span><span class='tag'>Life Lessons</span><span class='tag'>Life Lessons</span><span class='tag'>Life Lessons</span><span class='tag'>Life Lessons</span></div>`;

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

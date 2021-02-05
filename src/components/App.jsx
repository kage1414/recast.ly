import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      currentVids: exampleVideoData
    };
    this.onListItemClick = this.onListItemClick.bind(this);
    // this.findCurrentVideo = this.findCurrentVideo.bind(this);
  }

  // findCurrentVideo (title) {
  //   console.log('findCurrentVideo');
  //   for (var i = 0; i < exampleVideoData.length; i++) {
  //     let currentTitle = exampleVideoData[i].snippet.title;
  //     if (currentTitle === title) {
  //       this.setState({currentVideo: exampleVideoData[i]});
  //       break;
  //     }
  //   }
  // }

  onListItemClick(video) {
    console.log(video);
    this.setState({currentVideo: video});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList data={this.state.currentVideo} onChildClick={this.onListItemClick} videos={this.state.currentVids}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;

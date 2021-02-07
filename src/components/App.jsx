import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from './Search.js';
// import debounce from 'lodash/debounce';
// import searchYoutube from '../lib/searchYoutube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      currentVids: exampleVideoData,
      searchValue: ''
    };
    this.onListItemClick = this.onListItemClick.bind(this);
    this.debouncer = _.debounce(this.onInputChange.bind(this), 500);
    this.searchClick = this.searchClick.bind(this);
  }

  changeSearchValue(value) {
    this.setState({
      searchValue: value
    });
  }


  onListItemClick(video) {
    this.setState({currentVideo: video});
  }

  onInputChange(val) {
    let options = {
      key: YOUTUBE_API_KEY,
      query: val,
      max: 5
    };

    this.props.searchYouTube(options, data => {
      this.setState({
        currentVideo: data[0],
        currentVids: data
      });
    });

    console.log('debounced', val);

  }

  searchClick(val) {
    console.log(this.state.searchValue);


    let defaultOptions = {
      key: YOUTUBE_API_KEY,
      query: this.state.searchValue,
      max: 5
    };
    this.props.searchYouTube(defaultOptions, data => {
      this.setState({
        currentVideo: data[0],
        currentVids: data
      });
    });
  }

  componentDidMount() {
    let defaultOptions = {
      key: YOUTUBE_API_KEY,
      query: 'cats',
      max: 5
    };
    this.props.searchYouTube(defaultOptions, data => {
      this.setState({
        currentVideo: data[0],
        currentVids: data
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search changeSearchValue={this.changeSearchValue.bind(this)} searchClick={this.searchClick} handler={this.debouncer}/></h5></div>
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

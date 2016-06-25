
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: this.props.videos[0],
      videos: this.props.videos.slice(1),
      query: ''
    };
  }

  _changeVideo (targetVid) {
    let allVideos = this.state.videos;
    allVideos.push(this.state.video);
    let index = allVideos.indexOf(targetVid);
    allVideos.splice(index, 1);

    this.setState({
      video: targetVid,
      videos: allVideos
    });
  }

  _changeVideos() {
    var options = {
      query: this.state.query
    };

    this.props.searchYouTube(options, function(newVideos) {
      this.setState({
        video: newVideos[0],
        videos: newVideos.slice(1) });
    }.bind(this));
  }

  _changeQuery(searchValue) {
    console.log(searchValue)
    this.setState({
      query: searchValue
    });
  }

  //wrapper method (fetch nav bar)
    //youtube fetch
      //update state


  render() {
    return (
      <div>
        <Nav captureInput={this._changeQuery.bind(this)} captureSearch={this._changeVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList cv={this._changeVideo.bind(this)} videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

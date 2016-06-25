
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: this.props.videos[0],
      videos: this.props.videos.slice(1)
    };
  }

  //initilization fn setState
  //event handler for changing state

  _changeVideo (targetVid) {
    let vids = this.props.videos;

    let index = vids.indexOf(targetVid);

    this.setState({
      video: targetVid,
      videos: vids.slice(0, index).concat(vids.slice(index + 1))
    });
  }

  render() {
    return (
      <div>
        <Nav />
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

var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map(video => <VideoListEntry video={video}/> ) }
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


    // <VideoListEntry data={props.data[4]}/>
    // <VideoListEntry data={props.data[5]}/>
    // <VideoListEntry data={props.data[6]}/>
    // <VideoListEntry data={props.data[7]}/>
    // <VideoListEntry data={props.data[8]}/>


//change data naming as go down the chain
//console.log props inside top of App.jsx
//console.log props inside top of VideoList.jsx
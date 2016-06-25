var searchYouTube = ({query = 'kanye west', max = 5, key = 'AIzaSyAnrZXeqOxSVkRef0Fa9nKLXugFM-jEiiE'}, callback) => {
  //url
  var url = "https://www.googleapis.com/youtube/v3/videos?";
  url += query.split(' ').join('%20') + '&';
  url += 'maxResults=' + max + '&';
  // url += 'videoEmbeddable=true' + '&';
  url += 'key=' + key;

  $.get(url, callback);
};

window.searchYouTube = searchYouTube;

searchYouTube({}, function(data) {
  console.log(JSON.stringify(data));
});


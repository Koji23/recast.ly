var searchYouTube = ({query = 'kanye west', max = 5, key = YOUTUBE_API_KEY}, callback = () => {} ) => {
  //url
  var url = "https://www.googleapis.com/youtube/v3/search?";
  url += 'part=snippet';
  url += '&maxResults=' + max;
  url += '&q=' + query.split(' ').join('+');
  url += '&type=video';
  url += '&videoEmbeddable=true';
  url += '&key=' + key;

  console.log(url)
  $.get(url, function(data) {
    callback(data.items)
  });
};

window.searchYouTube = searchYouTube;

searchYouTube({}, function(data) {
  console.log(JSON.stringify(data));
});


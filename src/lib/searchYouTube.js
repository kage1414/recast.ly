import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      key: options.key,
      type: 'video',
      q: options.query,
      maxResults: options.max
      // videoEmbeddable: true
    },
    success: data => { callback(data.items); },
    error: error => { console.error(error); }
  });
};

export default searchYouTube;

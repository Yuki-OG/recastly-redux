var searchYouTube = ({key, query, max = 5}, callback) => {
  // $.get('https://www.googleapis.com/youtube/v3/search', {
  //   part: 'snippet',
  //   key: key,
  //   q: query,
  //   maxResults: max,
  //   type: 'video',
  //   videoEmbeddable: 'true'
  // })
  //   .done(({items}) => {
  //     if (callback) {
  //       callback(items);
  //     }
  //   })
  //   .fail(({responseJSON}) => {
  //     responseJSON.error.errors.forEach((err) =>
  //       console.error(err)
  //     );
  //   });

  var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&videoEmbeddable=true&type=video${query ? `&q=${query}` : ''}&key=${key}`;
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(response => response.json())
    .then(data => {
      callback(data.items);
    }).catch((error) => {
      console.error('Error:', error);
    });
};

export default searchYouTube;

// Fetch song recommendations from the API
fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem')
  .then(response => response.json())
  .then(data => {
    const recommendationsContainer = document.getElementById('recommendations');

    data.forEach(song => {
      // Create a div element for each song recommendation
      const songDiv = document.createElement('div');
      songDiv.classList.add('song');

      // Create an image element for the song's artwork
      const songImage = document.createElement('img');
      songImage.src = song.artworkUrl;
      songImage.alt = song.title;
      songDiv.appendChild(songImage);

      // Create heading element for the song's title
      const songTitle = document.createElement('h2');
      songTitle.textContent = song.title;
      songDiv.appendChild(songTitle);

      // Create paragraph element for the song's artist
      const songArtist = document.createElement('p');
      songArtist.textContent = 'By ' + song.artist;
      songDiv.appendChild(songArtist);

      // Add the song recommendation to the container
      recommendationsContainer.appendChild(songDiv);
    });
  })
  .catch(error => {
    console.log('Error fetching song recommendations:', error);
  });

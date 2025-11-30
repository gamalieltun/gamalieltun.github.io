const podcastContainer = document.getElementById("podcastList");

function renderPodcasts() {
  podcastContainer.innerHTML = podcasts
    .map(
      (podcast) => `
        <div class="project-card">
          <div class="audio-wrapper">
            <iframe 
              src="${podcast.spotifyUrl}"
              width="100%" 
              height="152" 
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
          </div>

          <h3>${podcast.title}</h3>
          <p>${podcast.description}</p>
        </div>
      `
    )
    .join("");
}

renderPodcasts();

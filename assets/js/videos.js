const videoContainer = document.getElementById("videoList");

function renderVideos() {
  videoContainer.innerHTML = videos
    .map(
      (video) => `
        <div class="project-card">
          <div class="video-wrapper">
            <iframe
              src="${video.embedUrl}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>

          <h3>${video.title}</h3>
          <p>${video.description}</p>
        </div>
      `
    )
    .join("");
}

renderVideos();

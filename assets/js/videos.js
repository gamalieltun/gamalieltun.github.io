const videoContainer = document.getElementById("videoList");

function extractYouTubeId(url) {
  // Remove any query parameters
  url = url.split("?")[0];

  const regex =
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^&?/]+)/;

  const match = url.match(regex);
  return match ? match[1] : null;
}

function renderVideos() {
  videoContainer.innerHTML = videos
    .map((video) => {
      const id = extractYouTubeId(video.url);

      return `
        <div class="project-card">
          <div class="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/${id}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>

          <h3>${video.title}</h3>
          <p>${video.description}</p>
        </div>
      `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", renderVideos);

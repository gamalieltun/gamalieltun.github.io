const videoContainer = document.getElementById("videoList");

/* 
   Extract a YouTube video ID from ANY valid YouTube URL
   Supported formats:
   - https://youtu.be/ID
   - https://youtu.be/ID?si=xxxx
   - https://www.youtube.com/watch?v=ID
   - https://youtube.com/watch?v=ID&t=30s
   - https://www.youtube.com/embed/ID
   - https://www.youtube.com/shorts/ID
   - https://m.youtube.com/...
*/
function extractYouTubeId(url) {
  // Remove any extra parameters (e.g., ?si=xxx, &t=10s)
  const cleanUrl = url.split("?")[0].split("&")[0];

  const patterns = [
    /youtu\.be\/([^\/]+)/,                   // youtu.be/ID
    /youtube\.com\/watch\?v=([^\/]+)/,       // youtube.com/watch?v=ID
    /youtube\.com\/embed\/([^\/]+)/,         // youtube.com/embed/ID
    /youtube\.com\/shorts\/([^\/]+)/,        // youtube.com/shorts/ID
    /youtube\.com\/v\/([^\/]+)/              // youtube.com/v/ID
  ];

  for (const regex of patterns) {
    const match = cleanUrl.match(regex);
    if (match) return match[1];
  }

  console.warn("Could not extract video ID from URL:", url);
  return null;
}

function renderVideos() {
  videoContainer.innerHTML = videos
    .map((video) => {
      const id = extractYouTubeId(video.url);

      if (!id) {
        return `<p style="color:red;">Invalid YouTube URL: ${video.url}</p>`;
      }

      const embedUrl = `https://www.youtube.com/embed/${id}`;

      return `
        <div class="project-card">
          <div class="video-wrapper">
            <iframe
              src="${embedUrl}"
              title="${video.title}"
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

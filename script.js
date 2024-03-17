document.addEventListener('DOMContentLoaded', function () {
    // Button to redirect to Calendly link
    const openFormBtn = document.getElementById('openFormBtn');
    openFormBtn.addEventListener('click', function () {
        window.location.href = 'https://calendly.com/helloankitsingh17';
    });
});

function openCalendly() {
    window.location.href =  'https://calendly.com/helloankitsingh17';
}

document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video-item video');

    videos.forEach(video => {
        video.addEventListener('play', function () {
            pauseOtherVideos(video);
        });
    });
});

function pauseOtherVideos(currentVideo) {
    const allVideos = document.querySelectorAll('.video-item video');

    allVideos.forEach(video => {
        if (video !== currentVideo && !video.paused) {
            video.pause();
        }
    });
}

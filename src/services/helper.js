const onHoverVideo = (video) => {
    const startPreview = () => {
        video.currentTime = 1;
        video.playbackRate = 0.5;
        video.play();
    }

    const stopPreview = () => {
        video.currentTime = 0;
        video.playbackRate = 1;
        video.pause();
    }

    video.addEventListener('mouseenter', () => {
        startPreview();
    });

    video.addEventListener('mouseleave', () => {
        stopPreview();
    });
}
export { onHoverVideo }
const onHoverVideo = video => {
  let start;

  const startPreview = () => {
    video.play();
  };

  const stopPreview = () => {
    video.pause();
  };

  video.addEventListener('mouseenter', () => {
    start = setTimeout(startPreview, 1000);
  });

  video.addEventListener('mouseleave', () => {
    clearTimeout(start);
    stopPreview();
  });
};

export { onHoverVideo };

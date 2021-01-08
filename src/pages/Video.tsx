export const Video = (): JSX.Element => {
  return (
    <div className="video-container">
      <video controls autoPlay>
        <source src="assets/taniatrigo-reel.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
    </div>
  );
};

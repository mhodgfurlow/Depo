import React from 'react';

const VideoDemo = () => {
    return (
        <section className="video-demo">
            <h2>Watch How It Works</h2>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/example"
                title="How Depo Works"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </section>
    );
};

export default VideoDemo;

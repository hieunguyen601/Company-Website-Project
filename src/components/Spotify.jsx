
function Spotify() {
    return (
        <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px", marginTop: "40px" }}
        src="https://open.spotify.com/embed/playlist/29wPXyrx5R0rq7mlu0CiVu?utm_source=generator&theme=0"
        width="80%"
        height="200"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="spotify"
      >
      </iframe>
    );
}

export default Spotify;
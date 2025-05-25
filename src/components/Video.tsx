export function Video(): JSX.Element {
    return (
        <video autoPlay={true} loop muted preload="none" style={{ objectFit: "cover", width: "100%", height: "100%" }}>
            <source src="https://s3.justapie.net/yae.webm" type="video/webm" />
            Your browser does not support the video tag.
        </video>
    );
}
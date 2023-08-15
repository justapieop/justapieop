export default function ImageWithLink(props: { src: string, link: string, alt?: string, className?: string }): JSX.Element {
    return (
        <div id="badges" className={props.className}>
            <a href={props.link}>
                <img src={props.src} alt={props.alt ?? "Image"} />
            </a>
        </div >

    );
}
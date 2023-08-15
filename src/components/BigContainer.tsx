export default function BigContainer(props: React.PropsWithChildren<{ className?: string }>): JSX.Element {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}
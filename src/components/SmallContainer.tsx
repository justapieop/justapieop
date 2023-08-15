export default function SmallContainer(props: React.PropsWithChildren<{ className?: string }>): JSX.Element {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}
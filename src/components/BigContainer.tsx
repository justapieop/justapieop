export default function BigContainer(props: React.PropsWithChildren<{ className?: string }>): JSX.Element {
    return (
        <div className={props.className}>
            <div className="bg-white shadow rounded-lg p-6">
                {props.children}
            </div>
        </div>
    );
}
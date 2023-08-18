export default function TextBlock(props: { job: string, loc: string, className?: string, children: any }): JSX.Element {
    return (
        <div className={props.className}>
            <div className="mb-6">
                <div className="flex justify-between">
                    <span className="text-white font-bold">{props.job}</span>
                    <p>
                        <span className="text-white mr-2">{props.loc}</span>
                    </p>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default function TextBlock(props: { job: string, loc: string, start: string, end: string, desc: string, className?: string }): JSX.Element {
    return (
        <div className={props.className}>
            <div className="mb-6">
                <div className="flex justify-between">
                    <span className="text-gray-600 font-bold">{props.job}</span>
                    <p>
                        <span className="text-gray-600 mr-2">at {props.loc}</span>
                        <span className="text-gray-600">{props.start} - {props.end}</span>
                    </p>
                </div>
                <p className="mt-2">{props.desc}</p>
            </div>
        </div>
    );
}
export default function PrimaryButton(props: { text: string, className?: string }): JSX.Element {
    return (
        <div className={props.className} >
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                {props.text}
            </a>
        </div>
    );
}
export default function SubmitButton(props: { text: string, className?: string }): JSX.Element {
    return (
        <button type="submit" className={props.className}>
            {props.text}
        </button>
    );
}
export default function NumberTextBox(props: { label: string, type: string, className?: string }): JSX.Element {
    return (
        <div>
            <label>{props.label}</label>
            <input type="number" className={props.className} placeholder="" required />
        </div>
    );
}
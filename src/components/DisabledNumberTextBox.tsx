export default function DisabledNumberTextBox(props: { label: string, type: string, className?: string }): JSX.Element {
    return (
        <div>
            <label className="text-white">
                {props.label}
            </label>
            <div className="pt-1" />
            <input type="number" className={props.className} placeholder="" disabled />
        </div>
    );
}
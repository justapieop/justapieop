export default function Profile(props: { avatar: string, name: string, desc: string }): JSX.Element {
    return (
        <div className="flex flex-col items-center bg-sec">
            <img src={props.avatar} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-1" alt="Avatar">
            </img>
            <h1 className="text-xl font-bold text-white">{props.name}</h1>
            <p className="text-white">{props.desc}</p>
        </div>
    );
}
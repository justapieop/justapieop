export default function Profile(props: { avatar: string, name: string, desc: string }): JSX.Element {
    return (
        <div className="flex flex-col items-center">
            <img src={props.avatar} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-1" alt="Avatar">
            </img>
            <h1 className="text-xl font-bold">{props.name}</h1>
            <p className="text-gray-600">{props.desc}</p>
        </div>
    );
}
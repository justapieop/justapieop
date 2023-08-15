import SmallContainer from "../components/SmallContainer";
import ImageWithLink from "../components/ImageWithLink";
import Profile from "../components/Profile";
import SmallBorder from "../components/SmallBorder";
import SmallList from "../components/SmallList";
import BigContainer from "../components/BigContainer";
import NumberTextBox from "../components/NumberTextBox";
import SubmitButton from "../components/SubmitButton";
import DisabledNumberTextBox from "../components/DisabledNumberTextBox";

export default function Home(): JSX.Element {
    function onSubmit(event: any): void {
        event.preventDefault();
        const min: number = Number(event.target[0].value);
        const max: number = Number(event.target[1].value);
        event.target[2].value = Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className="bg-third">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div>
                            <SmallContainer className="bg-sec shadow rounded-lg p-6">
                                <Profile avatar="/assets/avatar.png" name="Đỗ Trần Thái An" desc="Students & Junior Developer" />
                                <SmallBorder />
                                <span className="text-white uppercase font-bold tracking-wider mb-2">
                                    Technology
                                </span>
                                <SmallList className="text-white">
                                    <li className="mb-2">TypeScript</li>
                                    <li className="mb-2">Node.js</li>
                                    <li className="mb-2">Java</li>
                                    <li className="mb-2">Python</li>
                                    <li className="mb-2">Docker</li>
                                </SmallList>
                            </SmallContainer>
                        </div>
                        <div className="pt-5">
                            <SmallContainer className="bg-sec shadow rounded-lg p-6">
                                <span className="text-white uppercase font-bold tracking-wider mb-2">
                                    My stats
                                </span>
                                <SmallBorder />
                                <a href="#">
                                    <img className="align-middle" src="https://github-readme-stats.vercel.app/api?username=JustAPieOP&count_private=true&show_icons=true&theme=radical" />
                                </a>
                                <a href="#">
                                    <img className="align-center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=justapieop&layout=compact&theme=dark" />
                                </a>
                            </SmallContainer>
                        </div>
                    </div>

                    <div className="col-span-4 sm:col-span-9 ">
                        <div>
                            <BigContainer className="bg-sec shadow rounded-lg p-6">
                                <h3 className="font-semibold text-center text-white mt-3 -mb-2">
                                    My social accounts
                                </h3>
                                <div className="flex justify-center items-center gap-6 my-6">
                                    <ImageWithLink
                                        src="https://img.shields.io/badge/@justapieop-181717?style=for-the-badge&logo=github&logoColor=white"
                                        link="https://github.com/justapieop"
                                        alt="Github Badge"
                                    />
                                    <ImageWithLink
                                        src="https://img.shields.io/badge/@pieajust-blue?style=for-the-badge&logo=twitter&logoColor=white"
                                        link="https://twitter.com/pieajust"
                                        alt="Twitter Badge"
                                    />
                                    <ImageWithLink
                                        src="https://img.shields.io/badge/justapie06-5865F2?style=for-the-badge&logo=discord&logoColor=white"
                                        link="#"
                                        alt="Discord Badge"
                                    />
                                    <ImageWithLink
                                        src="https://img.shields.io/badge/Pie-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
                                        link="https://www.facebook.com/justapieop/"
                                        alt="Facebook Badge"
                                    />
                                </div>
                            </BigContainer>
                        </div>

                        <div className="pt-5">
                            <BigContainer className="pt-5 bg-sec shadow rounded-lg p-6">
                                <h2 className="text-xl text-white font-bold mb-4">Utilities</h2>
                                <SmallContainer className="shadow rounded-lg p-6">
                                    <h1 className="font-bold text-white">Random number generator</h1>
                                    <form onSubmit={onSubmit}>

                                        <div className="pt-3">
                                            <NumberTextBox
                                                className="bg-third text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                label="Min"
                                                type="number"
                                            />
                                            <div />
                                            <div className="pt-3">
                                                <NumberTextBox
                                                    className="bg-third text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    label="Max"
                                                    type="number" />
                                            </div>
                                            <div className="pt-3">
                                                <DisabledNumberTextBox
                                                    className="bg-third text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    label="Result"
                                                    type="number" />
                                            </div>
                                            <div className="pt-3">
                                                <SubmitButton className="bg-fourth hover:bg-purple text-white py-2 px-4 rounded"
                                                    text="Generate" />
                                            </div>
                                        </div>
                                    </form>
                                </SmallContainer>
                            </BigContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
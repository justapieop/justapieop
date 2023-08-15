import SmallContainer from "../components/SmallContainer";
import ImageWithLink from "../components/ImageWithLink";
import Profile from "../components/Profile";
import TextBlock from "../components/TextBlock"
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
        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <SmallContainer>
                            <Profile avatar="/assets/avatar.jpg" name="Đỗ Trần Thái An" desc="Students & Junior Developer" />
                            <SmallBorder />
                            <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">
                                Technology
                            </span>
                            <SmallList>
                                <li className="mb-2">TypeScript</li>
                                <li className="mb-2">Node.js</li>
                                <li className="mb-2">Java</li>
                                <li className="mb-2">Python</li>
                                <li className="mb-2">Docker</li>
                            </SmallList>
                        </SmallContainer>
                    </div>

                    <div className="col-span-4 sm:col-span-9 ">
                        <BigContainer >
                            <h2 className="text-xl font-bold mb-4">About Me</h2>
                            <p className="text-gray-700">I am a student from Vietnam. Currently studying at a highschool. Looking forward to becoming a software developer
                            </p>

                            <h3 className="font-semibold text-center mt-3 -mb-2">
                                Find me on
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


                            <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                            <TextBlock
                                job="Discord Bot Developer"
                                loc="MangoPlex Studio"
                                start="2020"
                                end="now"
                                desc="" />
                        </BigContainer>

                        <BigContainer className="pt-5">
                            <h2 className="text-xl font-bold mb-4">Utilities</h2>
                            <SmallContainer>
                                <h1 className="font-bold">Random number generator</h1>
                                <form onSubmit={onSubmit}>

                                    <div className="pt-3">
                                        <NumberTextBox
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            label="Min"
                                            type="number"
                                        />
                                        <div />
                                        <div className="pt-3">
                                            <NumberTextBox
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                label="Max"
                                                type="number" />
                                        </div>
                                        <div className="pt-3">
                                            <DisabledNumberTextBox
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                label="Result"
                                                type="number" />
                                        </div>
                                        <div className="pt-3">
                                            <SubmitButton className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                                                text="Generate" />
                                        </div>
                                    </div>
                                </form>
                            </SmallContainer>
                        </BigContainer>
                    </div>
                </div>
            </div>
        </div >
    );
}
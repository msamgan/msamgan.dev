import './App.css';
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Portfolio from "./icons/Portfolio";
import Blog from "./icons/Blog";
import Twitter from "./icons/Twitter";

const linkSvgClass = 'w-12 h-12 invert';

const links = [
    {
        name: "Portfolio",
        url: "https://msamgan.com",
        svg: <Portfolio className={linkSvgClass}/>
    },
    {
        name: "Blog",
        url: "https://codebysamgan.com",
        svg: <Blog className={linkSvgClass}/>

    },
    {
        name: "Github",
        url: "https://github.com/msamgan",
        svg: <Github className={linkSvgClass}/>
    },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/mohd-samgan-khan/",
        svg: <Linkedin className={linkSvgClass}/>
    },
    {
        name: "Twitter",
        url: "https://twitter.com/msamgank",
        svg: <Twitter className={linkSvgClass}/>
    }
]

function App() {
    return (
        <div className="App">
            <section className="bg-black text-gray-800 h-screen pt-20">
                <div
                    className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
                    <img className={'invert'} src={'https://msamgan.com/img/logo/msamgan.png'} alt={'msamgan'}/>
                    <div className="flex flex-wrap justify-center">
                        {
                            links.map((link, index) => (
                                <a key={index} href={link.url}
                                   target={'_blank'}
                                   className="text-white font-bold px-4 rounded m-2 has-tooltip">
                                    <span className="tooltip">{link.name}</span>
                                    {link.svg}
                                </a>
                            ))
                        }
                    </div>
                    <div className={'text-white mt-8 text-xl'}>
                        contact me at <a href="mailto:mail@msamgan.com" className="text-blue-500">mail@msamgan.com</a>
                    </div>
                </div>

                <div
                    className="container xl:max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-white">Mohammed Samgan Khan</h1>
                    <div className={'text-white mt-8 text-xl'}>
                        Seasoned Software Engineer with 10+ years of experience in supply chain management, logistics,
                        and transportation. Expertise in developing and deploying software solutions, with a proven
                        track with complex applications
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;

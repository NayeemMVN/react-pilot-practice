import './App.css';
import illustration1 from "./images/illustration-1.png"
import illustration2 from "./images/illustration-2.png"
import laryAvatar from "./images/lary-avatar.svg"
import mailboxIcon from "./images/mailbox-icon.svg"
import newsletterIcon from "./images/lary-newsletter-icon.png"
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import { Link } from "react-router-dom";
function Landing() {
    return (
        <section className="px-6 py-8">
            <Nav />

            <Header />

            <main className="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">


                <article
                    className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                    <div className="py-6 px-5 lg:flex">
                        <div className="flex-1 lg:mr-8">
                            <img src={illustration1} alt="Blog Post illustration" className="rounded-xl" />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                            <header className="mt-8 lg:mt-0">
                                <div className="space-x-2">
                                    <a href="#"
                                       className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                       style={{fontSize: "10px"}}>Techniques</a>

                                    <a href="#"
                                       className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                       style={{fontSize: "10px"}}>Updates</a>
                                </div>

                                <div className="mt-4">
                                    <h1 className="text-3xl">
                                        This is a big title and it will look great on two or even three lines. Wooohoo!
                                    </h1>

                                    <span className="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                                </div>
                            </header>

                            <div className="text-sm mt-2">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <p className="mt-4">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.
                                </p>
                            </div>

                            <footer className="flex justify-between items-center mt-8">
                                <div className="flex items-center text-sm">
                                    <img src={laryAvatar} alt="Lary avatar" />
                                        <div className="ml-3">
                                            <h5 className="font-bold">Lary Laracore</h5>
                                            <h6>Mascot at Laracasts</h6>
                                        </div>
                                </div>

                                <div className="hidden lg:block">
                                    <Link to="posts" className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8">Read Moreeee</Link>
                                </div>
                            </footer>
                        </div>
                    </div>
                </article>


                <div className="lg:grid lg:grid-cols-2">
                    <article
                        className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                        <div className="py-6 px-5">
                            <div>
                                <img src={illustration1} alt="Blog Post illustration" className="rounded-xl" />
                            </div>

                            <div className="mt-8 flex flex-col justify-between">
                                <header>
                                    <div className="space-x-2">
                                        <a href="#"
                                           className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                           style={{fontSize: "10px"}}>Techniques</a>

                                        <a href="#"
                                           className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                           style={{fontSize: "10px"}}>Updates</a>
                                    </div>

                                    <div className="mt-4">
                                        <h1 className="text-3xl">
                                            This is a big title and it will look great on two or even three lines.
                                            Wooohoo!
                                        </h1>

                                        <span className="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                                    </div>
                                </header>

                                <div className="text-sm mt-4">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p className="mt-4">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                    </p>
                                </div>

                                <footer className="flex justify-between items-center mt-8">
                                    <div className="flex items-center text-sm">
                                        <img src={laryAvatar} alt="Lary avatar" />
                                        <div className="ml-3">
                                            <h5 className="font-bold">Lary Laracore</h5>
                                            <h6>Mascot at Laracasts</h6>
                                        </div>
                                    </div>

                                    <div>
                                        <a href="#"
                                           className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </article>

                    <article
                        className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                        <div className="py-6 px-5">
                            <div>
                                <img src={illustration2} alt="Blog Post illustration" className="rounded-xl" />
                            </div>

                            <div className="mt-8 flex flex-col justify-between">
                                <header>
                                    <div className="space-x-2">
                                        <a href="#"
                                           className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                           style={{fontSize: "10px"}}>Techniques</a>

                                        <a href="#"
                                           className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                           style={{fontSize: "10px"}}>Updates</a>
                                    </div>

                                    <div className="mt-4">
                                        <h1 className="text-3xl">
                                            This is a big title and it will look great on two or even three lines.
                                            Wooohoo!
                                        </h1>

                                        <span className="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                                    </div>
                                </header>

                                <div className="text-sm mt-4">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p className="mt-4">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                    </p>
                                </div>

                                <footer className="flex justify-between items-center mt-8">
                                    <div className="flex items-center text-sm">
                                        <img src={laryAvatar} alt="Lary avatar" />
                                        <div className="ml-3">
                                            <h5 className="font-bold">Lary Laracore</h5>
                                            <h6>Mascot at Laracasts</h6>
                                        </div>
                                    </div>

                                    <div>
                                        <a href="#"
                                           className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </article>
                </div>


                <div className="lg:grid lg:grid-cols-3">
                    <article
                        className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                        <div className="py-6 px-5">
                            <div>
                                <img src={illustration1} alt="Blog Post illustration" className="rounded-xl" />
                            </div>

                            <div className="mt-8 flex flex-col justify-between">
                                <header>
                                    <div className="space-x-2">
                                        <a href="#"
                                           className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                           style={{fontSize: "10px"}}>Techniques</a>

                                        <a href="#"
                                           className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                           style={{fontSize: "10px"}}>Updates</a>
                                    </div>

                                    <div className="mt-4">
                                        <h1 className="text-3xl">
                                            This is a big title and it will look great on two or even three lines.
                                            Wooohoo!
                                        </h1>

                                        <span className="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                                    </div>
                                </header>

                                <div className="text-sm mt-4">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p className="mt-4">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                    </p>
                                </div>

                                <footer className="flex justify-between items-center mt-8">
                                    <div className="flex items-center text-sm">
                                        <img src={laryAvatar} alt="Lary avatar" />
                                        <div className="ml-3">
                                            <h5 className="font-bold">Lary Laracore</h5>
                                            <h6>Mascot at Laracasts</h6>
                                        </div>
                                    </div>

                                    <div>
                                        <a href="#"
                                           className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </article>

                    <article className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                        <div className="py-6 px-5">
                            <div>
                                <img src={illustration2} alt="Blog Post illustration" className="rounded-xl" />
                            </div>

                            <div className="mt-8 flex flex-col justify-between">
                                <header>
                                    <div className="space-x-2">
                                        <a href="#"
                                           className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                           style={{fontSize: "10px"}}>Techniques</a>

                                        <a href="#"
                                           className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                           style={{fontSize: "10px"}}>Updates</a>
                                    </div>

                                    <div className="mt-4">
                                        <h1 className="text-3xl">
                                            This is a big title and it will look great on two or even three lines.
                                            Wooohoo!
                                        </h1>

                                        <span className="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                                    </div>
                                </header>

                                <div className="text-sm mt-4">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p className="mt-4">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                    </p>
                                </div>

                                <footer className="flex justify-between items-center mt-8">
                                    <div className="flex items-center text-sm">
                                        <img src={laryAvatar} alt="Lary avatar" />
                                        <div className="ml-3">
                                            <h5 className="font-bold">Lary Laracore</h5>
                                            <h6>Mascot at Laracasts</h6>
                                        </div>
                                    </div>

                                    <div>
                                        <a href="#"
                                           className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </article>

                    <article className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                        <div className="py-6 px-5">
                            <div>
                                <img src={illustration2} alt="Blog Post illustration" className="rounded-xl" />
                            </div>

                            <div className="mt-8 flex flex-col justify-between">
                                <header>
                                    <div className="space-x-2">
                                        <a href="#"
                                           className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                           style={{fontSize: "10px"}}>Techniques</a>

                                        <a href="#"
                                           className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                           style={{fontSize: "10px"}}>Updates</a>
                                    </div>

                                    <div className="mt-4">
                                        <h1 className="text-3xl">
                                            This is a big title and it will look great on two or even three lines.
                                            Wooohoo!
                                        </h1>

                                        <span className="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                                    </div>
                                </header>

                                <div className="text-sm mt-4">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p className="mt-4">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                    </p>
                                </div>

                                <footer className="flex justify-between items-center mt-8">
                                    <div className="flex items-center text-sm">
                                        <img src={laryAvatar} alt="Lary avatar" />
                                        <div className="ml-3">
                                            <h5 className="font-bold">Lary Laracore</h5>
                                            <h6>Mascot at Laracasts</h6>
                                        </div>
                                    </div>

                                    <div>
                                        <a href="#"
                                           className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </article>
                </div>

            </main>

            <footer className="bg-gray-100 border border-black border-opacity-5 rounded-xl text-center py-16 px-10 mt-16">
                <img src={newsletterIcon} alt="" className="mx-auto -mb-6" style={{width: "145px"}} />
                    <h5 className="text-3xl">Stay in touch with the latest posts</h5>
                    <p className="text-sm mt-3">Promise to keep the inbox clean. No bugs.</p>

                    <div className="mt-10">
                        <div className="relative inline-block mx-auto lg:bg-gray-200 rounded-full">

                            <form method="POST" action="#" className="lg:flex text-sm">
                                <div className="lg:py-3 lg:px-5 flex items-center">
                                    <label htmlFor="email" className="hidden lg:inline-block">
                                        <img src={mailboxIcon} alt="mailbox letter" />
                                    </label>

                                    <input id="email" type="text" placeholder="Your email address"
                                           className="lg:bg-transparent py-2 lg:py-0 pl-4 focus-within:outline-none" />
                                </div>

                                <button type="submit"
                                        className="transition-colors duration-300 bg-blue-500 hover:bg-blue-600 mt-4 lg:mt-0 lg:ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-8"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
            </footer>
        </section>
    );
}

export default Landing;

const Footer = () => {

    return (
        <footer className="bg-black text-white py-4 font-sans font-bold ">
            <div className="max-w-7xl mx-auto px-4 flex">
                <div className="flex space-x-20 justify-end p-7">
                    <div className="flex h-full flex-col justify-end pr-10 h-full">
                        <div className="hover:text-luckyBrown text-left mt-4">
                            <p>© 2023 Millennial Chimes</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 pl-5 ">
                        <h5 className="font-bold uppercase underline hover:scale-110">User</h5>
                        <a href="/signup" className="hover:opacity-100 opacity-70">Signup</a>
                        <a href="/login" className="hover:opacity-100 opacity-70">Login</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h5 className="font-bold uppercase underline hover:scale-110">Info</h5>
                        <a href="/about" className="hover:opacity-100 opacity-70">About Us</a>
                        <a href="/contact" className="hover:opacity-100 opacity-70">Contact Us</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h5 className="font-bold uppercase underline hover:scale-110">Articles</h5>
                        <a href="/tech-news" className="hover:opacity-100 opacity-70">Tech News</a>
                        <a href="/new-tech" className="hover:opacity-100 opacity-70">New Tech</a>
                        <a href="/reads" className="hover:opacity-100 opacity-70">Interesting Reads</a>
                    </div>
                    <div>
                        <h5 className="font-bold uppercase underline hover:scale-110">Privacy Policy</h5>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;


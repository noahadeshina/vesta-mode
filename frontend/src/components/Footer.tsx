export default function Footer() {
    let date = new Date();

    return (
        <footer className="w-full h-[500px] bg-[#F5F5F5] flex flex-col">
            <div className="flex-1 grid items-center px-64 text-sm">
                <div className="grid grid-cols-7 items-center space-x-96">
                    <div className="space-y-14 col-span-3 w-full">
                        <div className="space-y-5">
                            <h2 className="text-[#D9D9D9]">INFO</h2>
                            <ul className="text-[#1E1E1E]">
                                <li>
                                    PRICING{" "}
                                    <span className="text-[#D9D9D9]">/</span>
                                </li>
                                <li>
                                    ABOUT{" "}
                                    <span className="text-[#D9D9D9]">/</span>
                                </li>
                                <li>CONTACT</li>
                            </ul>
                        </div>
                        <div className="space-y-5">
                            <h2 className="text-[#D9D9D9]">LANGUAGES</h2>
                            <ul>
                                <li>
                                    ENG{" "}
                                    <span className="text-[#D9D9D9]">/</span>
                                </li>
                                <li>
                                    ESP{" "}
                                    <span className="text-[#D9D9D9]">/</span>
                                </li>
                                <li>SWE</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-4">Images</div>
                </div>
            </div>
            <div className="text-center space-x-56 p-1.5 text-[12px] text-[#a7a6a6]">
                <p className="inline-block">
                    Copyright &copy; {date.getFullYear()} | Made by Noah
                    Adeshina
                </p>
                <p className="inline-block">privacy</p>
            </div>
        </footer>
    );
}

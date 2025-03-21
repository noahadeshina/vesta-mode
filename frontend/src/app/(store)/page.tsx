import Container from "@/components/Container";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {
    IoIosArrowBack,
    IoIosArrowDown,
    IoIosArrowForward,
} from "react-icons/io";

export default function Home() {
    return (
        <Container className="space-y-28 overflow-x-clip">
            <div className="space-y-1.5">
                <div className="-space-y-0.5">
                    <p>MEN</p>
                    <p>WOMEN</p>
                    <p>KIDS</p>
                </div>
                <div>
                    <label className="input rounded-xs bg-[#D9D9D9] focus:ring-0">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            className=""
                            type="search"
                            required
                            placeholder="Search"
                        />
                    </label>
                </div>
            </div>
            <div className="grid grid-cols-9 h-80 space-x-4">
                <div className="col-span-3 flex flex-col">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold">
                            NEW
                            <br />
                            COLLECTIONS
                        </h2>
                        <p>
                            Summer
                            <br />
                            2025
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="w-60 py-2 px-6 flex items-center justify-between bg-[#D9D9D9]">
                            <p>Go To Shop</p>
                            <HiOutlineArrowLongRight />
                        </div>
                        <div className="space-x-3">
                            <button className="btn btn-square rounded-none bg-white border-black text-black">
                                <IoIosArrowBack />
                            </button>
                            <button className="btn btn-square rounded-none bg-white border-black text-black">
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 grid grid-cols-3 space-x-4">
                    <div className="border border-[#D7D7D7]">
                        <img
                            className="w-full h-full object-cover"
                            src="./img/image1.png"
                            alt=""
                        />
                    </div>
                    <div className="border border-[#D7D7D7]">
                        <img
                            className="w-full h-full object-cover"
                            src="./img/image2.png"
                            alt=""
                        />
                    </div>
                    <div className="border border-[#D7D7D7]">
                        <img
                            className="w-full h-full object-cover"
                            src="./img/image3.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="space-y-10">
                <div className="flex items-baseline justify-between">
                    <h2 className="text-4xl font-bold">
                        NEW <br />
                        THIS WEEK <sup className="text-blue-600">(50)</sup>
                    </h2>
                    <p className="inline-block">See All</p>
                </div>
                <div className="h-96 flex gap-5 w-[150%]">
                    <div className="w-80 flex flex-col space-y-2">
                        <div className="border border-[#D7D7D7] flex-1">
                            <img
                                className="w-full h-full object-cover"
                                src="./img/image4.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="text-sm">V-Neck T-Shirt</p>
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold">
                                    Embroidered Seersucker Shirt
                                </h3>
                                <p className="font-bold">$99</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-80 flex flex-col space-y-2">
                        <div className="border border-[#D7D7D7] flex-1">
                            <img
                                className="w-full h-full object-cover"
                                src="./img/image5.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="text-sm">Cotton T Shirt</p>
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold">
                                    Basic Slim Fit T-Shirt
                                </h3>
                                <p className="font-bold">$99</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-80 flex flex-col space-y-2">
                        <div className="border border-[#D7D7D7] flex-1">
                            <img
                                className="w-full h-full object-cover"
                                src="./img/image6.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="text-sm">Henley T-Shirt</p>
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold">
                                    Blurred Print T-Shirt
                                </h3>
                                <p className="font-bold">$99</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-80 flex flex-col space-y-2">
                        <div className="border border-[#D7D7D7] flex-1">
                            <img
                                className="w-full h-full object-cover"
                                src="./img/image4.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="text-sm">Crewneck T-Shirt</p>
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold">
                                    Full Sleeve Zipper
                                </h3>
                                <p className="font-bold">$99</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-x-3 flex items-center justify-center w-full">
                    <button className="btn btn-square rounded-none bg-white border-black text-black">
                        <IoIosArrowBack />
                    </button>
                    <button className="btn btn-square rounded-none bg-white border-black text-black">
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
            <div className="space-y-10">
                <h2 className="text-4xl font-bold">
                    XIV <br />
                    COLLECTIONS
                    <br />
                    23-24
                </h2>
                <div className="space-y-3">
                    <ul className="flex space-x-5">
                        <li className="font-bold">(All)</li>
                        <li className="text-black/50">Men</li>
                        <li className="text-black/50">Women</li>
                        <li className="text-black/50">Kids</li>
                    </ul>
                    <hr />
                </div>

                <div className="h-96 flex gap-5 w-full">
                    <div className="w-80 flex flex-col space-y-2">
                        <div className="border border-[#D7D7D7] flex-1">
                            <img
                                className="w-full h-full object-cover"
                                src="./img/image1.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="text-sm">V-Neck T-Shirt</p>
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold">
                                    Embroidered Seersucker Shirt
                                </h3>
                                <p className="font-bold">$199</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-80 flex flex-col space-y-2">
                        <div className="border border-[#D7D7D7] flex-1">
                            <img
                                className="w-full h-full object-cover"
                                src="./img/image2.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="text-sm">Cotton T Shirt</p>
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold">
                                    Basic Slim Fit T-Shirt
                                </h3>
                                <p className="font-bold">$99</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-80 flex flex-col space-y-2">
                        <div className="border border-[#D7D7D7] flex-1">
                            <img
                                className="w-full h-full object-cover"
                                src="./img/image8.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="text-sm">Henley T-Shirt</p>
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold">
                                    Blurred Print T-Shirt
                                </h3>
                                <p className="font-bold">$99</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-80 flex flex-col space-y-2">
                        <div className="border border-[#D7D7D7] flex-1">
                            <img
                                className="w-full h-full object-cover"
                                src="./img/image3.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="text-sm">Crewneck T-Shirt</p>
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold">
                                    Full Sleeve Zipper
                                </h3>
                                <p className="font-bold">$99</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-x-3 flex items-center justify-center w-full text-center">
                    <p className="font-bold text-black/50 inline-block">More</p>
                    <IoIosArrowDown />
                </div>
            </div>
            <div className="space-y-16 mb-28">
                <div className="text-center space-y-2">
                    <h2 className="text-5xl">Our Approach to fashion design</h2>
                    <p className="w-[40%] m-auto leading-tight">
                        at Vésta Mode , we blend creativity with craftsmanship
                        to create fashion that transcends trends and stands the
                        test of time each design is meticulously crafted,
                        ensuring the highest quelity exqulsite finish
                    </p>
                </div>
                <div className="h-96 flex gap-5 w-[150%]">
                    <div className="h-96 w-80 border border-[#D7D7D7]">
                        <img
                            className="w-full h-full object-cover"
                            src="./img/image9.png"
                            alt=""
                        />
                    </div>
                    <div className="transform translate-y-20 h-96 w-80 border border-[#D7D7D7]">
                        <img
                            className="w-full h-full object-cover"
                            src="./img/image8.png"
                            alt=""
                        />
                    </div>
                    <div className="h-96 w-80 border border-[#D7D7D7]">
                        <img
                            className="w-full h-full object-cover"
                            src="./img/image10.png"
                            alt=""
                        />
                    </div>
                    <div className="transform translate-y-20 h-96 w-80 border border-[#D7D7D7]">
                        <img
                            className="w-full h-full object-cover"
                            src="./img/image3.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}

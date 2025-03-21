import SizeButton from "@/components/buttons/SizeButton";
import Container from "@/components/Container";
import Card from "@/components/products/Card";
import Filter from "@/components/products/Filter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Collections",
    description: "We have the best clothing and designs in the world.",
};

export default function ProductsPage() {
    return (
        <Container className="grid grid-cols-12 gap-5">
            <div className="col-span-3 pt-20 space-y-2">
                <h2 className="text-xl font-semibold">Filters</h2>
                <div className="divide-y divide-dashed">
                    <Filter filterName="Sizes">
                        <div className="space-x-1">
                            <SizeButton size="XS" />
                            <SizeButton size="S" />
                            <SizeButton size="M" />
                            <SizeButton size="L" />
                            <SizeButton size="XL" />
                            <SizeButton size="2XL" />
                        </div>
                    </Filter>
                    <Filter filterName="Availability" collapsible>
                        <div className="space-x-1">
                            <SizeButton size="XS" />
                            <SizeButton size="S" />
                            <SizeButton size="M" />
                            <SizeButton size="L" />
                            <SizeButton size="XL" />
                            <SizeButton size="2XL" />
                        </div>
                    </Filter>
                    <Filter filterName="Category" collapsible>
                        fh
                    </Filter>
                    <Filter filterName="Colors" collapsible>
                        fh
                    </Filter>
                    <Filter filterName="Price Range" collapsible>
                        fh
                    </Filter>
                    <Filter filterName="Collections" collapsible>
                        fh
                    </Filter>
                    <Filter filterName="Tags" collapsible>
                        fh
                    </Filter>
                    <Filter filterName="Rating" collapsible>fh</Filter>
                </div>
            </div>
            <div className="col-span-9 space-y-10">
                <div className="space-y-2">
                    <div className="space-y-1.5">
                        <h3 className="font-semibold text-sm">
                            <span className="text-black/40">Home</span> /
                            Products
                        </h3>
                        <h2 className="font-bold text-3xl">Products</h2>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <label className="input rounded-xs bg-[#D9D9D9] w-80">
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
                        <div className="grid grid-cols-4 grid-rows-2 gap-x-3 gap-y-1">
                            <button className="btn btn-xs btn-neutral btn-outline rounded-none w-30">
                                New
                            </button>
                            <button className="btn btn-xs btn-neutral btn-outline rounded-none w-30">
                                New
                            </button>
                            <button className="btn btn-xs btn-neutral btn-outline rounded-none w-30">
                                New
                            </button>
                            <button className="btn btn-xs btn-neutral btn-outline rounded-none w-30">
                                New
                            </button>
                            <button className="btn btn-xs btn-neutral btn-outline rounded-none w-30">
                                New
                            </button>
                            <button className="btn btn-xs btn-neutral btn-outline rounded-none w-30">
                                New
                            </button>
                            <button className="btn btn-xs btn-neutral btn-outline rounded-none w-30">
                                New
                            </button>
                            <button className="btn btn-xs btn-neutral btn-outline rounded-none w-30">
                                New
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </Container>
    );
}

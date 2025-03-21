export default function Card() {
    return (
        <div className="flex flex-col space-y-2">
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
                    <h3 className="font-bold">Embroidered Seersucker Shirt</h3>
                    <p className="font-bold">$99</p>
                </div>
            </div>
        </div>
    );
}

export default function SizeButton({ size }: { size: string }) {
    return (
        <button className="btn btn-sm btn-square btn-neutral btn-outline rounded-none">
            {size}
        </button>
    );
}

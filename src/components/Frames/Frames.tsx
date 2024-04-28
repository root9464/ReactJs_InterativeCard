export const Frames = ({ id, background }: { id: number, background: string[] }) => {
    return (
        <img src={background[id - 1]} alt="" />
    );
}
import Datas from "../components/Datas"

export default function Page() {
  return (
    <div>
        <h1 className="font-bold text-[50px] text-center">NUS Math Bus</h1>
        <p className="text-center mb-[10px]">Solve for {`"x"`}</p>
        <Datas />
    </div>
  );
}

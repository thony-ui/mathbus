import MathSymbols from "@/components/MathSymbols";
import Datas from "../components/Datas";
import Ping from "../components/Ping";

export default function Page() {
  return (
    <div>
      <svg
        className="fixed bottom-0 right-0 z-[-1]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1500 200"
      >
        <path
          fill="#93c5fd"
          d="M0 96l80 10.7c80 10.7 240 32 400 16 160-16 320-64 480-80 160-16 320 64 480 64s320-64 400-80l80-16v224H0z"
        ></path>
      </svg>
      <MathSymbols />
      <h1 className="font-bold text-[50px] text-center">
        NUS Math Bus
      </h1>
      <p className="text-center mb-[10px]">Solve for {`"x"`}</p>
      <Datas />
    </div>
  );
}

import Datas from "../components/Datas"
import Ping from "../components/Ping"

export default function Page() {

    const pingElements = Array.from({ length: 100 }, (_, index) => (
        <Ping key={index} id={`random-ping-${index}`} />
      ));
    
  return (
    <div>
        {pingElements}
        <h1 className="font-bold text-[50px] text-center">NUS Math Bus</h1>
        <p className="text-center mb-[10px]">Solve for {`"x"`}</p>
        <Datas />
    </div>
  );
}

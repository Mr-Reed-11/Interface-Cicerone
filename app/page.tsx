import Header from "@/components/header";
import Body from "@/components/body";
import ButtonGreen from "@/components/button-green";

export default function HomePage() {
  return (
    <main>
      <div>
        <Header></Header>
      </div>
      <div>
        <Body>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="grid content-center justify-items-center p-[25px]">
              <img
                className="object-cover w-[300px] pixelated mb-[50px] animation-float"
                src="images/robot.png"
              />
              <div className="content-center justify-center grid border-black border-[1px] drop-shadow">
                <h1 className="text-black text-[40px]"> teste</h1>
              </div>
            </div>
            <div className="grid grid-cols-3 w-[1000px] ">
              <ButtonGreen>Preciso que me guie ate um local.</ButtonGreen>
              <ButtonGreen>Preciso que me guie ate um local.</ButtonGreen>
              <ButtonGreen>Preciso que me guie ate um local.</ButtonGreen>
            </div>
          </div>
        </Body>
      </div>
    </main>
  );
}

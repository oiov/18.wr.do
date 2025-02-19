import { Dock } from "../components/Dock.tsx";

export default function Home() {
  return (
    <>
      <div class="p-2 w-full leading-8 min-h-screen text-shadow bg-[#f9e4f0] text-lg text-red-100">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img src="/logo.png" class="w-16 h-16 mt-10" />
          <h1 class="my-4 font-bold text-[#c5005a]">情趣小游戏</h1>{" "}
          <h2 class="mb-4 text-[#c5005a]">恋爱，情趣，好玩</h2>
          <div class="text-center mt-8">
            <div class="font-black my-4 text-[#c5005a]">点击按钮开始游戏</div>
            <div class="my-4 grid grid-cols-2 gap-4">
              <a
                href="/fxq/index.html"
                class="block px-8 py-2 border rounded-lg bg-pink-600">
                🔥飞行棋
              </a>
              <a
                href="/card"
                class="block px-8 py-2 border rounded-lg bg-pink-600">
                任务卡牌
              </a>
              <a
                href="/position"
                class="block px-8 py-2 border rounded-lg bg-pink-600">
                姿势卡牌
              </a>
              <a
                href="/positions"
                class="block px-8 py-2 border rounded-lg bg-pink-600">
                🔥姿势大全
              </a>
            </div>
          </div>
          <div class="mt-20 fixed bottom-20 left-0 right-0 text-center text-[#c5005a]">
            支持android，ios，平板，电脑等设备访问
            <br />
            @18.wr.do
          </div>
        </div>

        <Dock />
      </div>
    </>
  );
}

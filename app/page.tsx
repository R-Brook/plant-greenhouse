"use client"

import { Plant } from "@/components/Plant"
import { WateringCan } from "@/components/Watering-Can"

export const Home = () => {
  return (
    <div>
      <main className="h-dvh">
        <h1 className="block w-full text-center mb-6">Plant Greenhouse</h1>
        <div className="flex size-full justify-center">
          <div
            id="greenhouse"
            className="relative flex flex-wrap items-start size-10/12 p-10 bg-amber-800 gap-2"
          >
            <Plant uid="one" />
            <Plant uid="two" />
            <WateringCan />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

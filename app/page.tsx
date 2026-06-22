"use client"

import { useRef, useState } from "react"
import { DragDropProvider } from "@dnd-kit/react"
import { Plant } from "@/components/Plant"
import { WateringCan } from "@/components/Watering-Can"

export const Home = () => {
  const [parent, setParent] = useState<string | undefined>(undefined)
  const [wateringCounter, setWateringCounter] = useState<number>(0)

  const plantLastOver = useRef<string | null>(null)

  const handleWatering = (plantId: string | null) => {
    if (!plantId) {
      plantLastOver.current = null
      return
    }
    if (plantLastOver.current !== plantId) {
      setWateringCounter((count) => count + 1)
      plantLastOver.current = plantId
    }
  }

  const draggable = (
    <WateringCan id="draggable" wateringCounter={wateringCounter} />
  )

  return (
    <div>
      <main>
        <h1 className="block w-full text-center mb-6">Plant Greenhouse</h1>

        <div className="flex size-full justify-center">
          <DragDropProvider
            onDragOver={(event) => {
              const plantId = event.operation.target?.id as string | null
              const isPlant = plantId && ["A", "B", "C", "D"].includes(plantId)

              handleWatering(isPlant ? plantId : null)
            }}
            onDragEnd={(event) => {
              if (event.canceled) return

              const plantId = event.operation.target?.id as string | undefined
              setParent(plantId)

              plantLastOver.current = null
            }}
          >
            <div className="relative flex flex-wrap items-start size-10/12 p-10 gap-4">
              <Plant id="A" onWater={handleWatering}>
                {parent === "A" ? draggable : null}
              </Plant>

              <Plant id="B" onWater={handleWatering}>
                {parent === "B" ? draggable : null}
              </Plant>

              <Plant id="C" onWater={handleWatering}>
                {parent === "C" ? draggable : null}
              </Plant>

              <Plant id="D" onWater={handleWatering}>
                {parent === "D" ? draggable : null}
              </Plant>

              <div>{parent == null ? draggable : null}</div>
            </div>
          </DragDropProvider>
        </div>
      </main>
    </div>
  )
}

export default Home

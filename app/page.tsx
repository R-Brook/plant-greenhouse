"use client"

import { useState } from "react"
import { DragDropProvider } from "@dnd-kit/react"
import { Plant } from "@/components/Plant"
import { WateringCan } from "@/components/Watering-Can"
import { IPlants } from "@/types"

export const Home = () => {
  const plantsInitialStates = {
    plantA: {
      timesWatered: 0,
    },
    plantB: {
      timesWatered: 0,
    },
    plantC: {
      timesWatered: 0,
    },
  }

  const [plantStates, setPlantStates] = useState<IPlants>(plantsInitialStates)

  const [parent, setParent] = useState<string | undefined>(undefined)
  const draggable = <WateringCan id="draggable" />

  const waterPlant = (id: keyof IPlants) => {
    setPlantStates((prev) => ({
      ...prev,
      [`${id}`]: {
        ...prev[`${id}`],
        timesWatered: prev[`${id}`].timesWatered + 1,
      },
    }))
  }

  return (
    <div>
      <main>
        <h1 className="block w-full text-center mb-6">Plant Greenhouse</h1>
        <span>Plant A times watered: {plantStates.plantA.timesWatered}</span>
        <br />
        <span>Plant B times watered: {plantStates.plantB.timesWatered}</span>
        <br />
        <span>Plant C times watered: {plantStates.plantC.timesWatered}</span>
        <br />
        <button className="border-2" onClick={() => waterPlant("plantA")}>
          Water plant A
        </button>
        <button className="border-2" onClick={() => waterPlant("plantB")}>
          Water plant B
        </button>
        <button className="border-2" onClick={() => waterPlant("plantC")}>
          Water plant C
        </button>
        <div className="flex size-full justify-center">
          <DragDropProvider
            onDragEnd={(event) => {
              if (event.canceled) return
              setParent(event.operation.target?.id as string)
            }}
          >
            <div className="relative flex flex-wrap items-start size-10/12 p-10 bg-amber-800 gap-4">
              <Plant
                key="A"
                id="A"
                timesWatered={plantStates.plantA.timesWatered}
              >
                {parent === "A" ? draggable : null}
              </Plant>
              <Plant
                key="B"
                id="B"
                timesWatered={plantStates.plantB.timesWatered}
              >
                {parent === "B" ? draggable : null}
              </Plant>
              <Plant
                key="C"
                id="C"
                timesWatered={plantStates.plantC.timesWatered}
              >
                {parent === "C" ? draggable : null}
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

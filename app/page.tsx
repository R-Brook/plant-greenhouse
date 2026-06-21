"use client"

import { useState } from "react"
import { DragDropProvider } from "@dnd-kit/react"
import { Plant } from "@/components/Plant"
import { WateringCan } from "@/components/Watering-Can"

export const Home = () => {
  const [parent, setParent] = useState<string | undefined>(undefined)
  const draggable = <WateringCan id="draggable" />

  return (
    <div>
      <main>
        <h1 className="block w-full text-center mb-6">Plant Greenhouse</h1>

        <div className="flex size-full justify-center">
          <DragDropProvider
            onDragEnd={(event) => {
              if (event.canceled) return
              setParent(event.operation.target?.id as string)
            }}
          >
            <div className="relative flex flex-wrap items-start size-10/12 p-10  gap-4">
              <Plant key="A" id="A">
                {parent === "A" ? draggable : null}
              </Plant>
              <Plant key="B" id="B">
                {parent === "B" ? draggable : null}
              </Plant>
              <Plant key="C" id="C">
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

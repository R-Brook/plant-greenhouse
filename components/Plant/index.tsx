import { plantGrowthStates } from "@/data/plant-states"
import { useDroppable } from "@dnd-kit/react"
import { pointerIntersection } from "@dnd-kit/collision"
import { FC } from "react"

export interface IPlant {
  id: string
  timesWatered: number
  children: React.ReactNode
}

export const Plant: FC<IPlant> = ({ id, timesWatered, children }) => {
  const growth =
    timesWatered < 2
      ? plantGrowthStates[0]
      : timesWatered < 7
        ? plantGrowthStates[1]
        : timesWatered < 16
          ? plantGrowthStates[2]
          : plantGrowthStates[3]

  const { ref, isDropTarget } = useDroppable({
    id,
    collisionDetector: pointerIntersection,
  })

  return (
    <div
      ref={ref}
      id={id}
      className="grid bg-green-600 text-white p-2 h-22 w-22"
    >
      <span className="row-span-full col-span-full">
        Plant {id}
        <br />
        {growth}
        <br />
        {isDropTarget ? "Watering" : ""}
      </span>
      {children}
    </div>
  )
}

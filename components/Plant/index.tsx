import { plantGrowthStates } from "@/data/plant-states"
import { useDroppable } from "@dnd-kit/react"
import { shapeIntersection } from "@dnd-kit/collision"
import { FC, useEffect, useState } from "react"

export interface IPlant {
  id: string
  children: React.ReactNode
}

export const Plant: FC<IPlant> = ({ id, children }) => {
  const [timesWatered, setTimesWatered] = useState(0)

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
    collisionDetector: shapeIntersection,
  })

  useEffect(() => {
    const waterPlant = () => {
      setTimesWatered(timesWatered + 1)
    }
    if (isDropTarget) {
      waterPlant()
    }
  }, [id, isDropTarget])

  return (
    <div
      ref={ref}
      id={id}
      className={`grid text-white p-2 h-22 w-22 ${isDropTarget ? "bg-green-500" : "bg-green-600"}`}
    >
      <span className="row-span-full col-span-full">
        {growth}
        <br />
        Watered: {timesWatered}
        <br />
        {isDropTarget ? "Watering" : ""}
      </span>
      {children}
    </div>
  )
}

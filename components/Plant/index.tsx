import { plantImageDetails, plantGrowthStates } from "@/data/plant-states"
import { useDroppable } from "@dnd-kit/react"
import { shapeIntersection } from "@dnd-kit/collision"
import { FC, useEffect, useRef, useState } from "react"
import Image from "next/image"

export interface IPlant {
  id: string
  children: React.ReactNode
  onWater: (id: string) => void
}

export const Plant: FC<IPlant> = ({ id, children, onWater }) => {
  const [timesWatered, setTimesWatered] = useState(0)

  const { ref, isDropTarget } = useDroppable({
    id,
    collisionDetector: shapeIntersection,
  })

  const wasDropTarget = useRef(false)

  useEffect(() => {
    if (isDropTarget && !wasDropTarget.current) {
      setTimesWatered((times) => times + 1)
      onWater(id)
    }
    wasDropTarget.current = isDropTarget
  }, [isDropTarget])

  const growth =
    timesWatered < 2
      ? plantGrowthStates[0]
      : timesWatered < 7
        ? plantGrowthStates[1]
        : timesWatered < 16
          ? plantGrowthStates[2]
          : plantGrowthStates[3]

  const index = plantGrowthStates.indexOf(growth)

  const imageFile = plantImageDetails[index >= 0 ? index : 0].file
  const imageClasses = plantImageDetails[index >= 0 ? index : 0].class

  return (
    <div
      ref={ref}
      id={id}
      className="relative flex justify-center items-center text-white p-2 pb-8 h-28 w-28 bg-[url(/plant-stands/1.png)] bg-contain bg-no-repeat bg-bottom"
    >
      <Image
        src="/plants/flower-pot.gif"
        className="size-20"
        alt=""
        width={100}
        height={100}
      />
      {imageFile && (
        <Image
          src={imageFile}
          className={`absolute ${imageClasses}`}
          alt=""
          width={100}
          height={100}
        />
      )}
      {children}
    </div>
  )
}

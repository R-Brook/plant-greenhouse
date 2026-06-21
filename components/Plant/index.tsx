import { plantGrowthStates } from "@/data/plant-states"
import { useDroppable } from "@dnd-kit/react"
import { pointerIntersection } from "@dnd-kit/collision"
import { FC, useEffect, useState } from "react"
import Image from "next/image"

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
    // disabled: true,  - when it's not ready to be watered, can set this to true
    collisionDetector: pointerIntersection,
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
      className={`grid text-white p-2 h-28 w-28 bg-[url(/plant-stands/1.png)] bg-contain bg-no-repeat bg-bottom`}
    >
      <span className="relative row-span-full col-span-full">
        {/* {isDropTarget ? "Watering" : ""} */}
        <Image
          src={"/plants/flower-pot.gif"}
          className="absolute bottom-7 left-2 size-20"
          alt={""}
          width={100}
          height={100}
        />
        {growth === plantGrowthStates[1] && (
          <Image
            src={"/plants/mature-sunflower.gif"}
            className="absolute bottom-16 left-8 size-[40%]"
            alt={""}
            width={150}
            height={100}
          />
        )}
        {growth === plantGrowthStates[2] && (
          <Image
            src={"/plants/mature-sunflower.gif"}
            className="absolute bottom-15 left-3 size-[80%]"
            alt={""}
            width={100}
            height={100}
          />
        )}
        {growth === plantGrowthStates[3] && (
          <Image
            src={"/plants/twin-sunflower.gif"}
            className="absolute bottom-15"
            alt={""}
            width={100}
            height={100}
          />
        )}
      </span>
      {children}
    </div>
  )
}

import { plantImageDetails, plantGrowthStates } from "@/data/plant-states"
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

  let imageFile = null
  let imageClasses = ""

  const setImage = () => {
    const index = plantGrowthStates.indexOf(growth)

    imageFile = plantImageDetails[index >= 0 ? index : 0].file
    imageClasses = plantImageDetails[index >= 0 ? index : 0].class
  }

  setImage()

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
      className={`relative flex justify-center items-center text-white p-2 pb-8 h-28 w-28 bg-[url(/plant-stands/1.png)] bg-contain bg-no-repeat bg-bottom`}
    >
      {/* {isDropTarget ? "Watering" : ""} */}
      <Image
        src={"/plants/flower-pot.gif"}
        className="size-20"
        alt={""}
        width={100}
        height={100}
      />
      {imageFile && (
        <Image
          src={imageFile}
          className={`absolute ${imageClasses}`}
          alt={""}
          width={100}
          height={100}
        />
      )}
      {children}
    </div>
  )
}

import { useDraggable } from "@dnd-kit/react"
import { FC } from "react"
import Image from "next/image"

export interface IWateringCan {
  id: string
  wateringCounter: number
}

export const WateringCan: FC<IWateringCan> = ({ id, wateringCounter }) => {
  const { ref } = useDraggable({ id })

  return (
    <div ref={ref} className="size-40 p-2">
      <Image
        key={wateringCounter}
        src="/watering-can.png"
        alt=""
        width={100}
        height={100}
        className={wateringCounter > 0 ? "animate-pour" : ""}
      />
    </div>
  )
}

import { useDraggable } from "@dnd-kit/react"
import { FC } from "react"
import Image from "next/image"

export interface IWateringCan {
  id: string
}

export const WateringCan: FC<IWateringCan> = ({ id }) => {
  const { ref } = useDraggable({
    id: id,
  })
  return (
    <div
      ref={ref}
      className={`grid row-span-full col-span-full size-40  text-white p-2`}
    >
      <Image
        src={"/watering-can.png"}
        className=""
        alt={""}
        width={100}
        height={100}
      />
    </div>
  )
}

import { useDraggable } from "@dnd-kit/react"
import { FC } from "react"

export interface IWateringCan {
  id: string
}

export const WateringCan: FC<IWateringCan> = ({ id }) => {
  const { ref } = useDraggable({
    id: id,
  })
  return (
    <div ref={ref} className="block bg-gray-400 text-white p-2">
      Watering
      <br />
      can
    </div>
  )
}

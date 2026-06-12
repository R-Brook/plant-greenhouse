import { FC, useRef } from "react"
import Draggable from "react-draggable"

export const WateringCan: FC = () => {
  const nodeRef = useRef(null)
  return (
    <Draggable nodeRef={nodeRef} bounds="parent">
      <div ref={nodeRef} className="block bg-gray-400 text-white p-2">
        Watering can
      </div>
    </Draggable>
  )
}

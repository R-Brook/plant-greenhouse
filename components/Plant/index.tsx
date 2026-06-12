import { FC } from "react"

export interface IPlant {
  uid: string
}

export const Plant: FC<IPlant> = ({ uid }) => {
  return (
    <div id={uid} className="block bg-green-600 text-white p-2">
      Plant {uid}
    </div>
  )
}

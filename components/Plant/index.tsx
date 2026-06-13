import { PlantGrowthStates } from "@/data/plant-states"
import { useDroppable } from "@dnd-kit/react"
import { FC } from "react"

export interface IPlant {
  id: string
  growthState: (typeof PlantGrowthStates)[number]
  children: React.ReactNode
}

export const Plant: FC<IPlant> = ({ id, growthState, children }) => {
  const { ref } = useDroppable({ id })
  return (
    <div
      ref={ref}
      id={id}
      className="grid bg-green-600 text-white p-2 h-22 w-22"
    >
      <span className="row-span-full col-span-full">
        Plant {id}
        <br />
        {growthState}
      </span>
      {children}
    </div>
  )
}

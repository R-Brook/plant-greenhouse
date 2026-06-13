import { PlantGrowthStates } from "@/data/plant-states"

export interface IPlants {
  plantA: {
    growth: (typeof PlantGrowthStates)[number]
    timesWatered: number
  }
  plantB: {
    growth: (typeof PlantGrowthStates)[number]
    timesWatered: number
  }
  plantC: {
    growth: (typeof PlantGrowthStates)[number]
    timesWatered: number
  }
}

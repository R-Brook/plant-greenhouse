import { IPlantImageDetail } from "@/types"

export const plantGrowthStates: string[] = [
  "seed", // 0-1
  "seedling", // 2-6
  "small plant", // 7-15
  "mature plant", // 16+
]

export const plantImageDetails: IPlantImageDetail[] = [
  {
    file: null,
    class: "",
  },
  {
    file: "/plants/mature-sunflower.gif",
    class: "bottom-16 left-8 size-[40%]",
  },
  {
    file: "/plants/mature-sunflower.gif",
    class: "bottom-15 left-3 size-[80%]",
  },
  {
    file: "/plants/twin-sunflower.gif",
    class: "bottom-15",
  },
]

export const TimeBetweenWater: number = 30000 // 30 seconds

/**
 * Plants need to know:
 * how many times they've been watered.
 * how long until they next need watering.
 * their growth state
 * when to move to the next growth state
 */

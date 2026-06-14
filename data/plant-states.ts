export const plantGrowthStates = [
  "seed", // 0-1
  "seedling", // 2-6
  "small plant", // 7-15
  "mature plant", // 16+
]

export const TimeBetweenWater = 30000 // 30 seconds

/**
 * Plants need to know:
 * how many times they've been watered.
 * how long until they next need watering.
 * their growth state
 * when to move to the next growth state
 */

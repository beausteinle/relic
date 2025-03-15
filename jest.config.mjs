// filepath: c:\Users\beaus\Development\relic\relic\jest.config.mjs
import { defaults } from 'jest-config'

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
}

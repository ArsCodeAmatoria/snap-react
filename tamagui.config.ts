import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/theme-base'

const headingFont = createInterFont()
const bodyFont = createInterFont()

const config = createTamagui({
  defaultFont: 'body',
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  tokens,
  shorthands,
})

export type AppConfig = typeof config

// Make type available for Tamagui
declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere including in imported code
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config 
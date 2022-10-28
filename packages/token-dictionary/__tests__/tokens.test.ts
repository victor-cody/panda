import { semanticTokens, tokens } from '@css-panda/fixture'
import { expect, test } from 'vitest'
import { TokenDictionary } from '../src'
import { formats } from '../src/format'

test('should work with default fixture', () => {
  const dictionary = new TokenDictionary({
    tokens,
    semanticTokens,
  })

  const allSpacings = dictionary.filter({ extensions: { category: 'spacing' } })
  expect(allSpacings).toMatchInlineSnapshot(`
    [
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "prop": "1",
          "var": "--spacing-1",
          "varRef": "var(--spacing-1)",
        },
        "name": "spacing.1",
        "originalValue": "0.25rem",
        "path": [
          "spacing",
          "1",
        ],
        "type": "dimension",
        "value": "0.25rem",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "prop": "2",
          "var": "--spacing-2",
          "varRef": "var(--spacing-2)",
        },
        "name": "spacing.2",
        "originalValue": "0.5rem",
        "path": [
          "spacing",
          "2",
        ],
        "type": "dimension",
        "value": "0.5rem",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "prop": "3",
          "var": "--spacing-3",
          "varRef": "var(--spacing-3)",
        },
        "name": "spacing.3",
        "originalValue": "0.75rem",
        "path": [
          "spacing",
          "3",
        ],
        "type": "dimension",
        "value": "0.75rem",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "prop": "4",
          "var": "--spacing-4",
          "varRef": "var(--spacing-4)",
        },
        "name": "spacing.4",
        "originalValue": "1rem",
        "path": [
          "spacing",
          "4",
        ],
        "type": "dimension",
        "value": "1rem",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "prop": "5",
          "var": "--spacing-5",
          "varRef": "var(--spacing-5)",
        },
        "name": "spacing.5",
        "originalValue": "1.25rem",
        "path": [
          "spacing",
          "5",
        ],
        "type": "dimension",
        "value": "1.25rem",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "prop": "6",
          "var": "--spacing-6",
          "varRef": "var(--spacing-6)",
        },
        "name": "spacing.6",
        "originalValue": "1.5rem",
        "path": [
          "spacing",
          "6",
        ],
        "type": "dimension",
        "value": "1.5rem",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "prop": "0.5",
          "var": "--spacing-0\\\\.5",
          "varRef": "var(--spacing-0\\\\.5)",
        },
        "name": "spacing.0.5",
        "originalValue": "0.125rem",
        "path": [
          "spacing",
          "0.5",
        ],
        "type": "dimension",
        "value": "0.125rem",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "prop": "1.5",
          "var": "--spacing-1\\\\.5",
          "varRef": "var(--spacing-1\\\\.5)",
        },
        "name": "spacing.1.5",
        "originalValue": "0.375rem",
        "path": [
          "spacing",
          "1.5",
        ],
        "type": "dimension",
        "value": "0.375rem",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "prop": "2.5",
          "var": "--spacing-2\\\\.5",
          "varRef": "var(--spacing-2\\\\.5)",
        },
        "name": "spacing.2.5",
        "originalValue": "0.625rem",
        "path": [
          "spacing",
          "2.5",
        ],
        "type": "dimension",
        "value": "0.625rem",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "prop": "3.5",
          "var": "--spacing-3\\\\.5",
          "varRef": "var(--spacing-3\\\\.5)",
        },
        "name": "spacing.3.5",
        "originalValue": "0.875rem",
        "path": [
          "spacing",
          "3.5",
        ],
        "type": "dimension",
        "value": "0.875rem",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "conditions": {
            "base": "{spacing.4}",
            "lg": "{spacing.5}",
          },
          "prop": "gutter",
          "var": "--spacing-gutter",
          "varRef": "var(--spacing-gutter)",
        },
        "name": "spacing.gutter",
        "originalValue": "{spacing.4}",
        "path": [
          "spacing",
          "gutter",
        ],
        "type": "dimension",
        "value": "1rem",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "lg",
          "conditions": {
            "base": "{spacing.4}",
            "lg": "{spacing.5}",
          },
          "prop": "gutter",
          "var": "--spacing-gutter",
          "varRef": "var(--spacing-gutter)",
        },
        "name": "spacing.gutter",
        "originalValue": "{spacing.4}",
        "path": [
          "spacing",
          "gutter",
        ],
        "type": "dimension",
        "value": "1.25rem",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "isNegative": true,
          "originalPath": [
            "spacing",
            "1",
          ],
          "prop": "-1",
          "var": "--spacing-1",
          "varRef": "var(--spacing-1)",
        },
        "name": "spacing.-1",
        "originalValue": "0.25rem",
        "path": [
          "spacing",
          "-1",
        ],
        "type": "dimension",
        "value": "calc(var(--spacing-1) * -1)",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "isNegative": true,
          "originalPath": [
            "spacing",
            "2",
          ],
          "prop": "-2",
          "var": "--spacing-2",
          "varRef": "var(--spacing-2)",
        },
        "name": "spacing.-2",
        "originalValue": "0.5rem",
        "path": [
          "spacing",
          "-2",
        ],
        "type": "dimension",
        "value": "calc(var(--spacing-2) * -1)",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "isNegative": true,
          "originalPath": [
            "spacing",
            "3",
          ],
          "prop": "-3",
          "var": "--spacing-3",
          "varRef": "var(--spacing-3)",
        },
        "name": "spacing.-3",
        "originalValue": "0.75rem",
        "path": [
          "spacing",
          "-3",
        ],
        "type": "dimension",
        "value": "calc(var(--spacing-3) * -1)",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "isNegative": true,
          "originalPath": [
            "spacing",
            "4",
          ],
          "prop": "-4",
          "var": "--spacing-4",
          "varRef": "var(--spacing-4)",
        },
        "name": "spacing.-4",
        "originalValue": "1rem",
        "path": [
          "spacing",
          "-4",
        ],
        "type": "dimension",
        "value": "calc(var(--spacing-4) * -1)",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "isNegative": true,
          "originalPath": [
            "spacing",
            "5",
          ],
          "prop": "-5",
          "var": "--spacing-5",
          "varRef": "var(--spacing-5)",
        },
        "name": "spacing.-5",
        "originalValue": "1.25rem",
        "path": [
          "spacing",
          "-5",
        ],
        "type": "dimension",
        "value": "calc(var(--spacing-5) * -1)",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "isNegative": true,
          "originalPath": [
            "spacing",
            "6",
          ],
          "prop": "-6",
          "var": "--spacing-6",
          "varRef": "var(--spacing-6)",
        },
        "name": "spacing.-6",
        "originalValue": "1.5rem",
        "path": [
          "spacing",
          "-6",
        ],
        "type": "dimension",
        "value": "calc(var(--spacing-6) * -1)",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "isNegative": true,
          "originalPath": [
            "spacing",
            "0.5",
          ],
          "prop": "-0.5",
          "var": "--spacing-0\\\\.5",
          "varRef": "var(--spacing-0\\\\.5)",
        },
        "name": "spacing.-0.5",
        "originalValue": "0.125rem",
        "path": [
          "spacing",
          "-0.5",
        ],
        "type": "dimension",
        "value": "calc(var(--spacing-0\\\\.5) * -1)",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "isNegative": true,
          "originalPath": [
            "spacing",
            "1.5",
          ],
          "prop": "-1.5",
          "var": "--spacing-1\\\\.5",
          "varRef": "var(--spacing-1\\\\.5)",
        },
        "name": "spacing.-1.5",
        "originalValue": "0.375rem",
        "path": [
          "spacing",
          "-1.5",
        ],
        "type": "dimension",
        "value": "calc(var(--spacing-1\\\\.5) * -1)",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "isNegative": true,
          "originalPath": [
            "spacing",
            "2.5",
          ],
          "prop": "-2.5",
          "var": "--spacing-2\\\\.5",
          "varRef": "var(--spacing-2\\\\.5)",
        },
        "name": "spacing.-2.5",
        "originalValue": "0.625rem",
        "path": [
          "spacing",
          "-2.5",
        ],
        "type": "dimension",
        "value": "calc(var(--spacing-2\\\\.5) * -1)",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "isNegative": true,
          "originalPath": [
            "spacing",
            "3.5",
          ],
          "prop": "-3.5",
          "var": "--spacing-3\\\\.5",
          "varRef": "var(--spacing-3\\\\.5)",
        },
        "name": "spacing.-3.5",
        "originalValue": "0.875rem",
        "path": [
          "spacing",
          "-3.5",
        ],
        "type": "dimension",
        "value": "calc(var(--spacing-3\\\\.5) * -1)",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "base",
          "conditions": {
            "base": "{spacing.4}",
            "lg": "{spacing.5}",
          },
          "isNegative": true,
          "originalPath": [
            "spacing",
            "gutter",
          ],
          "prop": "-gutter",
          "var": "--spacing-gutter",
          "varRef": "var(--spacing-gutter)",
        },
        "name": "spacing.-gutter",
        "originalValue": "{spacing.4}",
        "path": [
          "spacing",
          "-gutter",
        ],
        "type": "dimension",
        "value": "calc(var(--spacing-gutter) * -1)",
      },
      Token {
        "extensions": {
          "category": "spacing",
          "condition": "lg",
          "conditions": {
            "base": "{spacing.4}",
            "lg": "{spacing.5}",
          },
          "isNegative": true,
          "originalPath": [
            "spacing",
            "gutter",
          ],
          "prop": "-gutter",
          "var": "--spacing-gutter",
          "varRef": "var(--spacing-gutter)",
        },
        "name": "spacing.-gutter",
        "originalValue": "calc(var(--spacing-gutter) * -1)",
        "path": [
          "spacing",
          "-gutter",
        ],
        "type": "dimension",
        "value": "1.25rem",
      },
    ]
  `)

  expect(formats.getFlattenedValues(dictionary)).toMatchInlineSnapshot(`
    Map {
      "fonts" => Map {
        "heading" => "var(--fonts-heading)",
        "body" => "var(--fonts-body)",
        "mono" => "var(--fonts-mono)",
      },
      "colors" => Map {
        "current" => "var(--colors-current)",
        "gray.50" => "var(--colors-gray-50)",
        "gray.100" => "var(--colors-gray-100)",
        "gray.200" => "var(--colors-gray-200)",
        "gray.300" => "var(--colors-gray-300)",
        "gray.400" => "var(--colors-gray-400)",
        "gray.500" => "var(--colors-gray-500)",
        "gray.600" => "var(--colors-gray-600)",
        "gray.700" => "var(--colors-gray-700)",
        "gray.800" => "var(--colors-gray-800)",
        "gray.900" => "var(--colors-gray-900)",
        "green.50" => "var(--colors-green-50)",
        "green.100" => "var(--colors-green-100)",
        "green.200" => "var(--colors-green-200)",
        "green.300" => "var(--colors-green-300)",
        "green.400" => "var(--colors-green-400)",
        "green.500" => "var(--colors-green-500)",
        "green.600" => "var(--colors-green-600)",
        "green.700" => "var(--colors-green-700)",
        "green.800" => "var(--colors-green-800)",
        "green.900" => "var(--colors-green-900)",
        "red.50" => "var(--colors-red-50)",
        "red.100" => "var(--colors-red-100)",
        "red.200" => "var(--colors-red-200)",
        "red.300" => "var(--colors-red-300)",
        "red.400" => "var(--colors-red-400)",
        "red.500" => "var(--colors-red-500)",
        "red.600" => "var(--colors-red-600)",
        "red.700" => "var(--colors-red-700)",
        "red.800" => "var(--colors-red-800)",
        "red.900" => "var(--colors-red-900)",
        "primary" => "var(--colors-primary)",
        "secondary" => "var(--colors-secondary)",
        "palette.50" => "var(--colors-palette-50)",
        "palette.100" => "var(--colors-palette-100)",
        "palette.200" => "var(--colors-palette-200)",
        "palette.300" => "var(--colors-palette-300)",
        "palette.400" => "var(--colors-palette-400)",
        "palette.500" => "var(--colors-palette-500)",
        "palette.600" => "var(--colors-palette-600)",
        "palette.700" => "var(--colors-palette-700)",
        "palette.800" => "var(--colors-palette-800)",
        "palette.900" => "var(--colors-palette-900)",
      },
      "fontSizes" => Map {
        "sm" => "var(--font-sizes-sm)",
        "xs" => "var(--font-sizes-xs)",
        "md" => "var(--font-sizes-md)",
        "lg" => "var(--font-sizes-lg)",
        "xl" => "var(--font-sizes-xl)",
      },
      "lineHeights" => Map {
        "normal" => "var(--line-heights-normal)",
        "none" => "var(--line-heights-none)",
        "shorter" => "var(--line-heights-shorter)",
        "short" => "var(--line-heights-short)",
        "base" => "var(--line-heights-base)",
        "tall" => "var(--line-heights-tall)",
        "taller" => "var(--line-heights-taller)",
      },
      "fontWeights" => Map {
        "normal" => "var(--font-weights-normal)",
        "medium" => "var(--font-weights-medium)",
        "semibold" => "var(--font-weights-semibold)",
        "bold" => "var(--font-weights-bold)",
      },
      "letterSpacings" => Map {
        "tighter" => "var(--letter-spacings-tighter)",
        "tight" => "var(--letter-spacings-tight)",
        "normal" => "var(--letter-spacings-normal)",
        "wide" => "var(--letter-spacings-wide)",
        "wider" => "var(--letter-spacings-wider)",
        "widest" => "var(--letter-spacings-widest)",
      },
      "radii" => Map {
        "none" => "var(--radii-none)",
        "sm" => "var(--radii-sm)",
        "base" => "var(--radii-base)",
        "md" => "var(--radii-md)",
        "lg" => "var(--radii-lg)",
        "xl" => "var(--radii-xl)",
        "2xl" => "var(--radii-2xl)",
        "3xl" => "var(--radii-3xl)",
        "full" => "var(--radii-full)",
      },
      "shadows" => Map {
        "xs" => "var(--shadows-xs)",
        "sm" => "var(--shadows-sm)",
        "base" => "var(--shadows-base)",
        "md" => "var(--shadows-md)",
      },
      "spacing" => Map {
        "1" => "var(--spacing-1)",
        "2" => "var(--spacing-2)",
        "3" => "var(--spacing-3)",
        "4" => "var(--spacing-4)",
        "5" => "var(--spacing-5)",
        "6" => "var(--spacing-6)",
        "0.5" => "var(--spacing-0\\\\.5)",
        "1.5" => "var(--spacing-1\\\\.5)",
        "2.5" => "var(--spacing-2\\\\.5)",
        "3.5" => "var(--spacing-3\\\\.5)",
        "gutter" => "var(--spacing-gutter)",
        "-1" => "calc(var(--spacing-1) * -1)",
        "-2" => "calc(var(--spacing-2) * -1)",
        "-3" => "calc(var(--spacing-3) * -1)",
        "-4" => "calc(var(--spacing-4) * -1)",
        "-5" => "calc(var(--spacing-5) * -1)",
        "-6" => "calc(var(--spacing-6) * -1)",
        "-0.5" => "calc(var(--spacing-0\\\\.5) * -1)",
        "-1.5" => "calc(var(--spacing-1\\\\.5) * -1)",
        "-2.5" => "calc(var(--spacing-2\\\\.5) * -1)",
        "-3.5" => "calc(var(--spacing-3\\\\.5) * -1)",
        "-gutter" => "calc(var(--spacing-gutter) * -1)",
      },
      "sizes" => Map {
        "1" => "var(--sizes-1)",
        "2" => "var(--sizes-2)",
        "3" => "var(--sizes-3)",
        "4" => "var(--sizes-4)",
        "5" => "var(--sizes-5)",
        "6" => "var(--sizes-6)",
        "0.5" => "var(--sizes-0\\\\.5)",
        "1.5" => "var(--sizes-1\\\\.5)",
        "2.5" => "var(--sizes-2\\\\.5)",
        "3.5" => "var(--sizes-3\\\\.5)",
      },
      "largeSizes" => Map {
        "xs" => "var(--large-sizes-xs)",
        "sm" => "var(--large-sizes-sm)",
        "md" => "var(--large-sizes-md)",
        "lg" => "var(--large-sizes-lg)",
        "xl" => "var(--large-sizes-xl)",
      },
      "animations" => Map {
        "none" => "var(--animations-none)",
        "spin" => "var(--animations-spin)",
        "ping" => "var(--animations-ping)",
        "pulse" => "var(--animations-pulse)",
        "bounce" => "var(--animations-bounce)",
      },
      "easings" => Map {
        "ease-in" => "var(--easings-ease-in)",
        "ease-out" => "var(--easings-ease-out)",
        "ease-in-out" => "var(--easings-ease-in-out)",
      },
      "durations" => Map {
        "75" => "var(--durations-75)",
        "100" => "var(--durations-100)",
        "150" => "var(--durations-150)",
      },
    }
  `)
})

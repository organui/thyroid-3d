import { describe, expect, test } from 'bun:test'
import {
  anatomyTree,
  assertAnatomyMapping,
  groupIds,
  hiddenFromVisibility,
  normalizeVisibility,
  sceneIdsForNode,
  visibilityFromHidden,
} from './anatomy-adapter'
import { structures } from './anatomy'

describe('anatomy tree adapter', () => {
  test('groups every structure exactly once under interface group rows', () => {
    expect(groupIds).toEqual([
      'group-thyroid-gland',
      'group-parathyroid-glands',
      'group-larynx-and-trachea',
      'group-arteries',
      'group-veins',
      'group-nerves',
    ])
    expect(anatomyTree.flatMap((group) => group.children!.map(({ id }) => id)).sort()).toEqual(
      structures.map(({ id }) => id).sort(),
    )
  })

  test('marks group rows as non-selectable and colours leaves like their meshes', () => {
    for (const group of anatomyTree) {
      expect(group.selectable).toBe(false)
      expect(group.color).toBeUndefined()
      for (const leaf of group.children!) {
        expect(leaf.selectable).toBeUndefined()
        expect(leaf.color).toBe(structures.find(({ id }) => id === leaf.id)!.color)
      }
    }
  })

  test('maps group rows to their scene leaves and leaves to themselves', () => {
    expect(sceneIdsForNode('group-thyroid-gland')).toEqual(['right-lobe', 'left-lobe', 'isthmus'])
    expect(sceneIdsForNode('trachea')).toEqual(['trachea'])
    expect(sceneIdsForNode('unknown')).toEqual([])
    expect(sceneIdsForNode(null)).toEqual([])
  })

  test('treats missing visibility entries as visible', () => {
    const visibility = normalizeVisibility({ trachea: false })
    expect(visibility.trachea).toBe(false)
    expect(visibility.isthmus).toBe(true)
    expect(Object.keys(visibility)).toHaveLength(structures.length)
  })

  test('round-trips the hidden set through the tree visibility map', () => {
    const hidden = new Set(['right-lobe', 'middle-thyroid-vein'])
    const visibility = visibilityFromHidden(hidden)
    expect(visibility).toEqual({ 'right-lobe': false, 'middle-thyroid-vein': false })
    expect(hiddenFromVisibility(visibility)).toEqual(hidden)
    expect(hiddenFromVisibility({ isthmus: true })).toEqual(new Set())
  })

  test('rejects missing, unknown, and duplicate leaves', () => {
    expect(() => assertAnatomyMapping()).not.toThrow()
    const [first, ...rest] = anatomyTree
    expect(() => assertAnatomyMapping(rest)).toThrow(/missing=right-lobe/)
    expect(() =>
      assertAnatomyMapping([...anatomyTree, { id: 'pyramidal-lobe', label: 'Pyramidal lobe' }]),
    ).toThrow(/unknown=pyramidal-lobe/)
    expect(() =>
      assertAnatomyMapping([...anatomyTree, { id: 'g', label: 'Again', children: [first] }]),
    ).toThrow(/duplicates=right-lobe/)
  })
})

export type Structure = {
  id: string
  fma: string
  name: string
  sourceName: string
  group:
    'Thyroid gland' | 'Parathyroid glands' | 'Larynx and trachea' | 'Arteries' | 'Veins' | 'Nerves'
  // Official 4.3 IS-A concepts this group draws its source meshes from.
  concepts: string[]
  // FJ element files; each element belongs to exactly one structure.
  elements: string[]
  color: string
  description: string
  note: string
}

export const anatomySource =
  'https://training.seer.cancer.gov/anatomy/endocrine/glands/thyroid.html'
export const structures: Structure[] = [
  {
    id: 'right-lobe',
    fma: 'FMA13368',
    name: 'Right lobe',
    sourceName: 'right lobe of thyroid gland',
    group: 'Thyroid gland',
    concepts: ['FMA13368'],
    elements: ['FJ3672'],
    color: '#b8655a',
    description:
      'One of the two wings of the thyroid gland. It wraps around the side of the trachea and the lower larynx.',
    note: 'Shown as one surface. The thyroid makes hormones that set the pace of the body’s metabolism.',
  },
  {
    id: 'left-lobe',
    fma: 'FMA13369',
    name: 'Left lobe',
    sourceName: 'left lobe of thyroid gland',
    group: 'Thyroid gland',
    concepts: ['FMA13369'],
    elements: ['FJ3671'],
    color: '#c47465',
    description:
      'The other wing of the gland, mirroring the right lobe on the left side of the trachea.',
    note: 'Shown as one surface. A pyramidal lobe, present in some people, is not modelled.',
  },
  {
    id: 'isthmus',
    fma: 'FMA49178',
    name: 'Isthmus',
    sourceName: 'isthmus of thyroid gland',
    group: 'Thyroid gland',
    concepts: ['FMA49178'],
    elements: ['FJ3670'],
    color: '#a5564d',
    description:
      'The narrow bridge that joins the two lobes across the front of the trachea, just below the cricoid cartilage.',
    note: 'Its size varies a lot between people.',
  },
  {
    id: 'right-superior-parathyroid',
    fma: 'FMA55560',
    name: 'Right superior parathyroid',
    sourceName: 'right superior parathyroid gland',
    group: 'Parathyroid glands',
    concepts: ['FMA55560'],
    elements: ['FJ3676'],
    color: '#e0a35a',
    description:
      'A pea-sized gland on the back of the upper right lobe. The parathyroids control calcium levels in the blood.',
    note: 'Best seen from the posterior view. Real positions vary, especially for the lower glands.',
  },
  {
    id: 'right-inferior-parathyroid',
    fma: 'FMA55562',
    name: 'Right inferior parathyroid',
    sourceName: 'right inferior parathyroid gland',
    group: 'Parathyroid glands',
    concepts: ['FMA55562'],
    elements: ['FJ3675'],
    color: '#d48f4c',
    description: 'A small gland on the back of the lower right lobe.',
    note: 'Best seen from the posterior view. Real positions vary, especially for the lower glands.',
  },
  {
    id: 'left-superior-parathyroid',
    fma: 'FMA55561',
    name: 'Left superior parathyroid',
    sourceName: 'left superior parathyroid gland',
    group: 'Parathyroid glands',
    concepts: ['FMA55561'],
    elements: ['FJ3674'],
    color: '#e8b56f',
    description: 'A small gland on the back of the upper left lobe.',
    note: 'Best seen from the posterior view. Real positions vary, especially for the lower glands.',
  },
  {
    id: 'left-inferior-parathyroid',
    fma: 'FMA55563',
    name: 'Left inferior parathyroid',
    sourceName: 'left inferior parathyroid gland',
    group: 'Parathyroid glands',
    concepts: ['FMA55563'],
    elements: ['FJ3673'],
    color: '#cf8442',
    description: 'A small gland on the back of the lower left lobe.',
    note: 'Best seen from the posterior view. Real positions vary, especially for the lower glands.',
  },
  {
    id: 'hyoid-bone',
    fma: 'FMA52749',
    name: 'Hyoid bone',
    sourceName: 'hyoid bone',
    group: 'Larynx and trachea',
    concepts: ['FMA52749'],
    elements: ['FJ2772'],
    color: '#e2d6b8',
    description:
      'A U-shaped bone above the larynx. It anchors muscles of the tongue and throat and does not touch any other bone.',
    note: 'Included for orientation. The muscles attached to it are omitted.',
  },
  {
    id: 'thyroid-cartilage',
    fma: 'FMA55099',
    name: 'Thyroid cartilage',
    sourceName: 'thyroid cartilage',
    group: 'Larynx and trachea',
    concepts: ['FMA55099'],
    elements: ['FJ2808'],
    color: '#c6cdbf',
    description:
      'The largest cartilage of the larynx, forming the Adam’s apple. The gland is named after it, though it sits below it.',
    note: 'The other laryngeal cartilages and membranes are omitted, apart from the cricoid.',
  },
  {
    id: 'cricoid-cartilage',
    fma: 'FMA9615',
    name: 'Cricoid cartilage',
    sourceName: 'cricoid cartilage',
    group: 'Larynx and trachea',
    concepts: ['FMA9615'],
    elements: ['FJ2440'],
    color: '#b3bcae',
    description:
      'A ring of cartilage at the bottom of the larynx. The isthmus of the thyroid lies just below it.',
    note: 'Included for orientation.',
  },
  {
    id: 'trachea',
    fma: 'FMA7394',
    name: 'Trachea',
    sourceName: 'trachea',
    group: 'Larynx and trachea',
    concepts: ['FMA7394'],
    elements: ['FJ2541'],
    color: '#a7b4a6',
    description:
      'The windpipe. The thyroid lobes rest against its sides and the isthmus crosses its front.',
    note: 'Shown down to where it divides in the chest. The esophagus behind it is omitted.',
  },
  {
    id: 'common-carotid-artery',
    fma: 'FMA69325',
    name: 'Right common carotid artery',
    sourceName: 'trunk of right common carotid artery',
    group: 'Arteries',
    concepts: ['FMA69325'],
    elements: ['FJ4986'],
    color: '#b8564c',
    description:
      'The main artery to the head on this side. It runs up beside the thyroid lobe and divides near the top of the thyroid cartilage.',
    note: 'Only the right side is included: the left trunk in the source sits away from the neck and is omitted.',
  },
  {
    id: 'superior-thyroid-artery',
    fma: 'FMA66472',
    name: 'Superior thyroid artery',
    sourceName:
      'trunk and anterior, lateral and posterior glandular branches of right superior thyroid artery',
    group: 'Arteries',
    concepts: ['FMA66472', 'FMA49489', 'FMA49495', 'FMA49492'],
    elements: ['FJ5011', 'FJ5024', 'FJ5112', 'FJ5163'],
    color: '#d0836c',
    description:
      'The first branch of the external carotid artery. It descends to the upper pole of the lobe and divides over the gland.',
    note: 'The source includes it on the right side only. Its trunk and three glandular branches are one selectable set. The inferior thyroid arteries are omitted.',
  },
  {
    id: 'superior-thyroid-vein',
    fma: 'FMA50808',
    name: 'Superior thyroid vein',
    sourceName: 'right superior thyroid vein',
    group: 'Veins',
    concepts: ['FMA50808'],
    elements: ['FJ5231'],
    color: '#6d8db0',
    description: 'Drains the upper part of the lobe and follows the superior thyroid artery.',
    note: 'The source includes it on the right side only. The internal jugular vein it drains into is omitted.',
  },
  {
    id: 'middle-thyroid-vein',
    fma: 'FMA50824',
    name: 'Middle thyroid vein',
    sourceName: 'right middle thyroid vein',
    group: 'Veins',
    concepts: ['FMA50824'],
    elements: ['FJ4999'],
    color: '#7f9fbf',
    description: 'A short vein from the side of the lobe straight to the internal jugular vein.',
    note: 'The source includes it on the right side only. The internal jugular vein is omitted.',
  },
  {
    id: 'inferior-thyroid-veins',
    fma: 'FMA4757',
    name: 'Inferior thyroid veins',
    sourceName: 'right inferior thyroid vein',
    group: 'Veins',
    concepts: ['FMA4757'],
    elements: ['FJ5099'],
    color: '#5f7fa6',
    description:
      'A network of veins from the lower poles and isthmus that runs down in front of the trachea toward the brachiocephalic veins.',
    note: 'The source models it as one mesh that crosses the midline.',
  },
  {
    id: 'right-recurrent-laryngeal-nerve',
    fma: 'FMA80694',
    name: 'Right recurrent laryngeal nerve',
    sourceName: 'trunk of right recurrent laryngeal nerve',
    group: 'Nerves',
    concepts: ['FMA80694'],
    elements: ['FJ4021'],
    color: '#e3c95e',
    description:
      'A branch of the vagus nerve that climbs behind the thyroid lobe to the larynx and moves most of the vocal cord muscles.',
    note: 'Surgeons protect it during thyroid operations. On the right it hooks under the subclavian artery, which is omitted.',
  },
  {
    id: 'left-recurrent-laryngeal-nerve',
    fma: 'FMA80695',
    name: 'Left recurrent laryngeal nerve',
    sourceName: 'trunk of left recurrent laryngeal nerve',
    group: 'Nerves',
    concepts: ['FMA80695'],
    elements: ['FJ3923'],
    color: '#d6b84a',
    description:
      'The left branch starts lower, looping under the aortic arch in the chest before climbing beside the trachea.',
    note: 'It is longer than the right nerve. The aortic arch and the vagus nerves are omitted.',
  },
]
export const groups = [
  'Thyroid gland',
  'Parathyroid glands',
  'Larynx and trachea',
  'Arteries',
  'Veins',
  'Nerves',
] as const
export const byId = Object.fromEntries(structures.map((s) => [s.id, s]))
export type View = 'Anterior' | 'Posterior' | 'Right lateral'
export const tour: { id: string; title: string; text: string; view: View; isolate?: boolean }[] = [
  {
    id: 'right-lobe',
    title: 'A butterfly in the neck',
    text: 'The thyroid has two lobes that wrap around the front and sides of the trachea, below the larynx. Rotate the model to see how closely it hugs the airway.',
    view: 'Anterior',
  },
  {
    id: 'isthmus',
    title: 'The bridge',
    text: 'The isthmus joins the lobes across the front of the trachea, just below the ring of the cricoid cartilage.',
    view: 'Anterior',
  },
  {
    id: 'right-superior-parathyroid',
    title: 'Four small glands behind',
    text: 'Turn to the back to find the parathyroid glands, two on each lobe. They are separate glands that control calcium in the blood.',
    view: 'Posterior',
  },
  {
    id: 'right-recurrent-laryngeal-nerve',
    title: 'A nerve to protect',
    text: 'The recurrent laryngeal nerve is isolated here. It climbs in the groove beside the trachea, behind the lobe, to reach the voice box. Restore all to see the gland around it.',
    view: 'Right lateral',
    isolate: true,
  },
  {
    id: 'superior-thyroid-artery',
    title: 'Blood from above',
    text: 'The superior thyroid artery leaves the external carotid near the top of the larynx and runs down to the upper pole of the lobe, where it divides over the gland.',
    view: 'Right lateral',
  },
]

export type Emphasis = 'normal' | 'selected' | 'ghosted'
// With nothing selected every structure keeps its own color. A selection
// keeps its structure solid and ghosts the rest so it stays visible even
// when it sits behind or inside other geometry (parathyroids, nerves).
export function emphasis(id: string, selected: string | null): Emphasis {
  if (!selected) return 'normal'
  return id === selected ? 'selected' : 'ghosted'
}

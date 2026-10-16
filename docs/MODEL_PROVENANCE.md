# Model provenance and preparation

## Source and license

The runtime model uses **BodyParts3D / Anatomography 4.3** (object set 4.3, ontology tree FMA3.0), retrieved **2026-10-16**. All selected OBJ headers report compatibility version 4.3.

The original service explicitly permits modification and redistribution of contour data and rendered images under **[CC BY-SA 2.1 Japan](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en)** ([legal text](https://creativecommons.org/licenses/by-sa/2.1/jp/legalcode)). An inert [snapshot of that notice](model-source/original-license.html.txt), copied from the lungs explorer's provenance record, is included. This license governs `public/models/thyroid.glb`, the manifest's model data and the model screenshots, separately from the MIT application code. This follows the same choice as [lungs-3d](https://github.com/organui/lungs-3d) and [pancreas-3d](https://github.com/organui/pancreas-3d), which also use 4.3 data: the LSDB archive's CC BY 4.0 grant covers its 4.0 release and is not extended to these 4.3 meshes.

Credit: **BodyParts3D / Anatomography, © The Database Center for Life Science (DBCLS).** Adapted by OrganUI. No endorsement is implied.

## Retrieval and pinning

The network policy of the sandbox this was built in blocked both `dbarchive.biosciencedbc.jp` and `lifesciencedb.jp`, so the official archives could not be downloaded. Geometry comes from the public [olivercase/body_parts_3d_api](https://github.com/olivercase/body_parts_3d_api) mirror, pinned at commit `fd527e6f4daf732fd814314d9257df5877b844bc` (the same commit the lungs and pancreas explorers pin).

Each OBJ is checked three ways:

1. Its SHA-256 matches the oid in its pinned Git LFS pointer (recorded per file in [model-inputs.json](../scripts/model-inputs.json)).
2. Its embedded `File ID` and `Concept ID` headers match.
3. That concept maps to that FJ element in the official 4.3 IS-A table, [`FMA2Obj-4.3.tsv`](model-source/FMA2Obj-4.3.tsv) (SHA-256 `c3d16c89…935d4f`). The table is the unchanged official download preserved by lungs-3d; `prepare-model.ts` refuses to run if its hash changes.

The official per-element metadata table (original model filenames) could not be fetched, so unlike lungs-3d it is not preserved here.

## Selected structures

| Structure                       | Source concept(s)                                                                                     | Elements                       |
| ------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------ |
| Right lobe                      | FMA13368 right lobe of thyroid gland                                                                  | FJ3672                         |
| Left lobe                       | FMA13369 left lobe of thyroid gland                                                                   | FJ3671                         |
| Isthmus                         | FMA49178 isthmus of thyroid gland                                                                     | FJ3670                         |
| Right superior parathyroid      | FMA55560                                                                                              | FJ3676                         |
| Right inferior parathyroid      | FMA55562                                                                                              | FJ3675                         |
| Left superior parathyroid       | FMA55561                                                                                              | FJ3674                         |
| Left inferior parathyroid       | FMA55563                                                                                              | FJ3673                         |
| Hyoid bone                      | FMA52749                                                                                              | FJ2772                         |
| Thyroid cartilage               | FMA55099                                                                                              | FJ2808                         |
| Cricoid cartilage               | FMA9615                                                                                               | FJ2440                         |
| Trachea                         | FMA7394                                                                                               | FJ2541                         |
| Right common carotid artery     | FMA69325 trunk                                                                                        | FJ4986                         |
| Superior thyroid artery         | FMA66472 trunk, FMA49489 anterior, FMA49495 lateral and FMA49492 posterior glandular branches (right) | FJ5011, FJ5024, FJ5112, FJ5163 |
| Superior thyroid vein           | FMA50808 (right)                                                                                      | FJ5231                         |
| Middle thyroid vein             | FMA50824 (right)                                                                                      | FJ4999                         |
| Inferior thyroid veins          | FMA4757 (right inferior thyroid vein)                                                                 | FJ5099                         |
| Right recurrent laryngeal nerve | FMA80694 trunk                                                                                        | FJ4021                         |
| Left recurrent laryngeal nerve  | FMA80695 trunk                                                                                        | FJ3923                         |

21 elements, 45,148 triangles. Each element belongs to exactly one structure; the script refuses duplicates and unused inputs. Per-element hashes, sizes and counts are in the [manifest](../public/models/manifest.json) and [selected-mappings.tsv](model-source/selected-mappings.tsv).

Decisions:

- **Duplicate copies.** The 4.3 table maps the cricoid cartilage to FJ2440, FJ2769 and FJ6487, the trachea to FJ2541 and FJ6588, and the hyoid to FJ2772 and FJ3201. Each set has identical bounds and face counts (only the file headers differ), so the lowest-numbered element is used and the others are excluded to avoid z-fighting.
- **Two vessel generations.** In this region the 4.3 set mixes older elements (FJ2xxx/FJ3xxx) with newer, finer ones (FJ4xxx/FJ5xxx) that do not line up with each other. The newer right common carotid (FJ4986) is used because the newer superior thyroid artery and thyroid veins attach to it; the older right trunk (FJ3564) is excluded.
- **Right-sided vessels only.** The superior thyroid artery and the superior, middle and inferior thyroid veins exist in the source on the right side only, so they are shown that way. FMA4757 is named the right inferior thyroid vein but its mesh is the plexus crossing the midline.
- **Omitted on alignment grounds.** The left common carotid trunk (FJ1682M) sits above the larynx, away from the neck vessels, and the inferior thyroid arteries with their thyrocervical trunks (FJ2209, FJ2210, FJ2307, FJ2255) float lateral to the gland without reaching it. Both looked wrong in the rendered model and were left out rather than moved.
- Also omitted: the esophagus (it runs the length of the thorax and would shrink the gland in every view), internal jugular veins, vagus nerves, subclavian arteries, aortic arch, neck muscles, other laryngeal cartilages and membranes, and lymph nodes. The trachea is shown down to its bifurcation and the left recurrent laryngeal nerve down into the chest, so the model extends below the neck.

## Transformation and orientation

Vertices are recentred on the selection's source bounding box and uniformly scaled by `0.025`; axes change from source `[x, y, z]` to display `[x, z, -y]` (source +x patient left, −y anterior, +z superior). The anterior view looks along display −Z, posterior along +Z, and the right lateral view from the patient's right along +X. In the anterior view the right lobe and the carotid are on the viewer's left, as expected. No anatomical reshaping or decimation is performed.

## Reproduce

```sh
bun run prepare:model   # downloads missing OBJs into .asset-cache/objs, verifies, writes the GLB and manifest
bun run verify:model    # checks the GLB hash, structure IDs, element lists and geometry
```

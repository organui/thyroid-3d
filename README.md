# OrganUI Thyroid

A minimal, standalone, open-source thyroid and parathyroid anatomy explorer built with React, TypeScript, Three.js, React Three Fiber, Vite, and Bun. It shares its interaction design and code with [OrganUI Heart](https://github.com/organui/heart-3d).

**Status:** working local demo. Eighteen selectable structures from a real, openly licensed model, responsive layouts, and checked desktop/mobile interactions. Public deployment and clinical anatomy review have not been completed.

![OrganUI Thyroid desktop explorer](docs/screenshots/desktop.png)

## Run locally

Install [Bun](https://bun.sh/) **1.4.2 or newer**, then:

```sh
git clone https://github.com/organui/thyroid-3d.git
cd thyroid-3d
bun install --frozen-lockfile
bun run dev
```

Open **http://127.0.0.1:5173**. No environment variables, accounts, API keys, sibling repositories, model downloads, or external font services are needed after dependency installation. The ready-to-use 1.8 MB GLB is in `public/models/`.

```sh
bun run typecheck       # TypeScript checks, including conversion scripts
bun run test            # Unit tests for selection emphasis, picking, ownership, and the anatomy-tree adapter
bun run verify:model    # Check the GLB hash, source IDs, element lists, and valid geometry
bun run build           # Typecheck and create dist/
bun run preview         # Serve the production build at http://127.0.0.1:4173
bun run format:check    # Check formatting
```

The app is static and uses relative build paths. No deployment has been performed.

## Explore

- The thyroid opens from the front with the larynx, trachea, main right-sided vessels and both recurrent laryngeal nerves around it. Open **Anatomy** in the header to browse structures.
- Drag to rotate; scroll or pinch to zoom. The view menu has anterior, posterior and right lateral presets. Manual rotation changes its label to **Custom view**; zooming and selecting keep the view name.
- Select a mesh or use the anatomy tree (the OrganUI registry `anatomy-tree` component, see [registry integration](docs/REGISTRY_INTEGRATION.md)). The selected structure glows in its own colour and everything else is ghosted, so the parathyroids and nerves behind the gland stay visible.
- Isolate a structure, hide it, or restore all. **Reset explorer** restores the anterior camera, visibility, selection, tree state and tour.
- Follow five guided stops: the lobes, the isthmus, the parathyroids from behind, the recurrent laryngeal nerve, and the superior thyroid artery.
- Keyboard: Tab/Enter for controls, arrow keys to rotate the focused model, `+`/`-` to zoom, Escape closes the panel and returns focus to its toggle.

<details>
<summary>Selection, posterior, lateral and mobile screenshots</summary>

![Right superior parathyroid selected with the rest ghosted](docs/screenshots/anatomy.png)

![Posterior view showing the parathyroids and nerves](docs/screenshots/posterior.png)

![Right lateral view](docs/screenshots/lateral.png)

<img src="docs/screenshots/mobile.png" alt="Mobile thyroid explorer" width="300" />

</details>

## Model, credits, and license

> BodyParts3D / Anatomography, © The Database Center for Life Science (DBCLS), licensed under Creative Commons Attribution-Share Alike 2.1 Japan. Adapted by OrganUI.

The model is a curated subset of **BodyParts3D / Anatomography 4.3**: 21 source meshes grouped into 18 structures. The model data and screenshots of it are under **[CC BY-SA 2.1 Japan](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en)**, separately from this repository's **MIT code license**. Meshes come from a checksum-pinned public mirror and are cross-checked against the official 4.3 concept table. Read [model provenance](docs/MODEL_PROVENANCE.md), [asset attribution](public/models/ATTRIBUTION.md) and the [manifest](public/models/manifest.json).

Descriptions summarise the [NCI SEER Training thyroid anatomy page](https://training.seer.cancer.gov/anatomy/endocrine/glands/thyroid.html) and general anatomy; the sandbox this was built in could not reach that site, so the link itself was not re-checked. **Expert anatomical review is pending.** This is an educational interface demonstration, not a diagnostic or clinical tool.

Known limitations:

- Each lobe and the isthmus is one mesh. A pyramidal lobe is not modelled.
- The superior thyroid artery and the thyroid veins exist in the source on the right side only. The inferior thyroid arteries, left common carotid, jugular veins, esophagus, vagus nerves and neck muscles are omitted (see [model provenance](docs/MODEL_PROVENANCE.md) for why).
- The trachea and left recurrent laryngeal nerve continue into the chest, so the model extends below the neck. Parathyroid positions are one typical arrangement; real positions vary. Colours are illustrative.
- Browser checks used headless Chromium with software WebGL at desktop and phone viewport sizes, not physical devices or a screen-reader audit.

## License

Original application code: [MIT](LICENSE). Anatomy model, derived model images, fonts, and icons retain their separately documented licenses.

Part of [OrganUI](https://github.com/organui).

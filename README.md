# Tailwind tutorial: Designing with Tailwind CSS

The official Tailwind CSS YouTube channel's [video tutorial series](https://www.youtube.com/playlist?list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR) that walk through the basics of using the framework, including topics like styling typography, creating layouts, and working with responsive design.

[Git repository](https://github.com/tailwindlabs/designing-with-tailwindcss)

## 1. Setting up Tailwind and PostCSS

[Video](https://www.youtube.com/watch?v=21HuwjmuS7A&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=1)


Create a new project and install dependencies:
```
npm init
npm install tailwindcss postcss-cli autoprefixer
```

Configure tailwind in postcss:
1. Create tailwind config:
    ```
    npx tailwind init
    ```
2. Manually create `postcss.config.js` file in project's root folder.
3. Specify PostCSS plugins to use.
4. Add `tailwind.css` file to new `css` folder. (The location and the name of file don't really matter.) Add tailwind markers to this css file.
5. Add a script called `build` to package.json to build tailwind css with postcss. Exclude the output folder from git.
6. Build css with the new script:
    ```
    npm run build
    ```
7. Add new `index.html` file and use a built css in it. Update the tailwind config so its content part has a path to the index.html file. Rebuild tailwind css to include the used classes into the built version.

Now use `live-server` to watch the changes. Install it globally:
```
npm install -g live-server
```
And run it on public folder:
```
live-server public
```

## 2. The Utility-First Workflow

[Video](https://www.youtube.com/watch?v=Ybybd3GCNn4&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=2)

## 3. Responsive Design

[Video](https://www.youtube.com/watch?v=Ff_n_QClipQ&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=3)

Prefix classes with sm:, md:, lg: and xl: for applying styles to the screen sizes starting with the prefix's widh till the next size's class met. Eg. if you set different background colors with sm: and lg: prefixes then the color for sm will also apply to the all the widths till the wids of lg and you don't need to repeat it for md:

## 4. Hover, Focus, and Active Styles

[Video](https://www.youtube.com/watch?v=olyRu5R1EZ4&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=4)

## 5. Composing Utilities with @apply

[Video](https://www.youtube.com/watch?v=krSgBUmIgP0&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=5)

## 6. Extracting Reusable Components

Use vue components for deduplication.

[Video](https://www.youtube.com/watch?v=3OdRwZu0FQU&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=6)

[Git repository of the tutoral.](https://github.com/tailwindlabs/designing-with-tailwindcss/tree/master/01-getting-up-and-running/06-extracting-reusable-components) Needs update to newer versions of dependencies and migration to vite.

[How to Migrate from Vue CLI to Vite](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)

[Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

## 7. Customizing Your Design System

[Video](https://www.youtube.com/watch?v=wtW6LodXkls&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=7)


There are several approaches to customize the tailwind design system.

#### Generate the full config and edit it:

```
npx tailwind init tailwind-full.config.js --full
```

But in this case it is difficult to tell what has been changed and what is actually the default setting. The other downside of this approach is that when the new version of tailwind comes out, the generated config won't be updated with any new values. But it can also be a good thing as the new versions of tailwind won't accidantly bring new style / design to the project.

#### Customize by overriding just needed options in the default config:

Add the values you want to override to the
```
theme: {
    extend: {},
  },
```
section of the `tailwind.config.js`.

If we simply add eg. `colors` directly to the `theme` we will override the entire colors palette of the tailwind (none of the previously existing colors like indigo, gray etc. will be present).

This is good when we have the whole color palette provided by the desiner to be used for the project. 

If it's not the case and we simply want to add some new colors => we should add the `colors` to `extend` of the `theme`.

## 8. Optimizing for Production with Purgecss

[Video](https://www.youtube.com/watch?v=bhoDwo24K5Q&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=8)

Use [Purgecss](https://purgecss.com/) to generate only the part of tailwind css the project requires.

```
npm i -D @fullhuman/postcss-purgecss
```

In `postcss.config.js`:
```
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
            content: [
                './src/**/*.vue',
                './index.html'
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
          }),
  ]
}
```

Difference in size of built css file, first one is a regular size and second is the one with `purgecss` applied:

![build with and without purgecss](/doc-img/build_with_and_without_purgecss.jpg)

## 9. Structuring a Basic Card

[Video](https://www.youtube.com/watch?v=1OUbP0rGFNs&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=9)

## 10. Making Text Content Feel Designed

[Video](https://www.youtube.com/watch?v=5byxwJce6zc&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=10)

## 11. Working with SVG Icons

[Video](https://www.youtube.com/watch?v=MbUyHQRq2go&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=11)

[SVG icons (Heroicons)](https://heroicons.com/)

[SVG background patterns (Hero Patterns)](https://heropatterns.com/)

More resources [here](https://tailwindcss.com/resources).

Alternative SVG icons: [Zondicons](https://www.zondicons.com/) and [Entypo](http://www.entypo.com/).

SVG optimization can be done with [SVGOMG](https://jakearchibald.github.io/svgomg/)

```
Tips: 

Always export icons as a squers (eg. viewBox="0 0 24 24") as it's easier to style them in this case.

Use utilities' classes to actually size the icons (eg. h-4, w-4).

Use class fill-current to fill the icon with the text color (eg. text-teal-500).

Align icons with the rest of the elements by using classes flex and items-center in parent container.
``` 

## 12. Designing a Badge

[Video](https://www.youtube.com/watch?v=G2Mllr1pq-0&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=12)

```
Tip:

Align items with different font size in a flex container with items-baseline class applied to the container.
```

## 13. Cropping and Positioning Images

[Video](https://www.youtube.com/watch?v=ldtwvIR6_qU&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=13)

`object-contain`, `object-cover`; `object-center`, `object-top`, `object-bottom`, `object-left`, `object-right`

`bg-cover` for background images.

## 14. Locking an Image to a Fixed Aspect Ratio

[Video](https://www.youtube.com/watch?v=jl_tdhBxc_Y&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=14)

Wrap image with div. Set div's padding bottom in percent. And make it `relative`. Set image's position `absolute` and set its width and heigt to full:

```
<div class="relative pb-2/3">
  <img class="absolute h-full w-full object-cover" :src="property.imageUrl" :alt="property.imageAlt">
</div>
```

## 15. Creating Depth with Shadows and Layers

[Video](https://www.youtube.com/watch?v=vZdxUGX3qdA&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=15)

Use negative margines to layer elements, like `-mt-4`.

If the element is set to `relative` it'll be on top of the regular elements. If to `relative` elements come one by one, the second one will be on top of the first one. `z` index has no effect on the elements without a position.

Use different shadows for different layers. Stronger one for the top layer.

## 16. Building a Navbar Layout with Flexbox

`flex` container + `items-center` + `justify-right` or `justify-between` or `justify-around`.

## 17. Toggling the Navbar Links on Mobile

[Video](https://www.youtube.com/watch?v=5mFGl566wc0&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=17)

## 18. Making the Navbar Responsive

[Video](https://www.youtube.com/watch?v=qrTsS3z8BAw&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=18)

## 19. Styling a Dropdown Menu

[Video](https://www.youtube.com/watch?v=TQFW3AtrDw4&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=19)

## 20. Positioning the Dropdown Area

[Video](https://www.youtube.com/watch?v=H069P7FVIo0&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=20)

When we set elements position to `absolute` it is aligned according to the nearest positioned element. By default elements are `static`, so if there are no other elements with set positioning - the nearest positioned element is `body`. To fix it, we can set the nearest container to be positioned as `relative` so it counts as a positioned element but behaves almost the same way as in case of `static` positioning.
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

## 5. Designing with Tailwind CSS: Composing Utilities with @apply

[Video](https://www.youtube.com/watch?v=krSgBUmIgP0&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=5)

## 6. Designing with Tailwind CSS: Extracting Reusable Components

Use vue components for deduplication.

[Video](https://www.youtube.com/watch?v=3OdRwZu0FQU&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=6)

[Git repository of the tutoral.](https://github.com/tailwindlabs/designing-with-tailwindcss/tree/master/01-getting-up-and-running/06-extracting-reusable-components) Needs update to newer versions of dependencies and migration to vite.

[How to Migrate from Vue CLI to Vite](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)

[Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

## 7. Designing with Tailwind CSS: Customizing Your Design System

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

## 8. Designing with Tailwind CSS: Optimizing for Production with Purgecss

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
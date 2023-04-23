# Tailwind tutorial

The official Tailwind CSS YouTube channel's [video tutorial series](https://www.youtube.com/playlist?list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR) that walk through the basics of using the framework, including topics like styling typography, creating layouts, and working with responsive design.

## 1. Designing with Tailwind CSS: Setting up Tailwind and PostCSS

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
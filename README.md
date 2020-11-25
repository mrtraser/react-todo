# ToDo app example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start

To start project you should run:
```
yarn
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

You can build application by running

```
yarn build
```

It creates `build` folder in the root of the project, which can be rendered
by web server (or be previewed via github-pages, instruction how to do this [you can find here](https://create-react-app.dev/docs/deployment/#github-pages))

## Things which are need to be added

### Required
* extend `ToDoForm` component with 2 fields:
    * `title` (instead of `name`)
    * `description`
* render `title` and `description` in the list of added `ToDoItems` with styled them properly
* show number of unchecked todos (you can place it somewhere on the page)
* add a button to remove all checked todos
* add form validation:
    * length of the field shouldn’t be less than 3 characters
    * title should start with a capital letter
* styling:
    * change color of remove button to red, replace text with the trush icon
    * make checked and unchecked todos with different colors

### Optional
* make text crossed when todo is checked
* add time of creation in the format (`dd.MM.yyyy – hh:mm`, ex: `22.01.2021 – 11:10`), render date in the list
* publish the app on the gh-pages


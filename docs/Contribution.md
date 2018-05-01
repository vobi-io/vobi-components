## Contribution guidelines

* Develop new component(s) under `./src/components/` folder:
* Wrap your component under component-named folder:
* Inside component folder created `README.md` file and describe your component:
* Create story for newly created component under `./src/stories/` folder:
* Wrap your story under component-named folder:
* Story must fit requirements:
    *  It must describe whats component does, what is it for and how to use it.
    *  Must include `README.md` of component.
    *  Must show some of usage case(s).
    *  Must include components `import` and component usage `code` snippets.
* After that do not forgot to include newly created story in `.storybook/stories.js`
    *  Keep order and place your story under the relevant category (or create new)


### User semantic git commits
For more information view [here](https://seesparkbox.com/foundry/semantic_commit_messages)

* `chore` add Oyster build script
* `docs` explain hat wobble
* `feat` add beta sequence
* `fix` remove broken confirmation message
* `refactor` share logic between 4d3d3d3 and flarhgunnstow
* `style` convert tabs to spaces
* `test` ensure Tayne retains clothing
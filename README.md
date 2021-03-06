<h1 style="text-align: center;">
    <a href="https://github.com/vobi-io/vobi-components">
        <img src="https://avatars0.githubusercontent.com/u/25040473?s=200&v=4" alt="Vobi.io Components" width="200px">
    </a>
</h1>

`vobi-components` is a collection of [React](https://facebook.github.io/react/) components developed by Vobi.io team.

#### [Demo](https://vobi-io.github.io/vobi-components) | [Source](https://github.com/vobi-io/vobi-components)

## Setup

* Install with `npm` or `yarn`:
```sh
npm i vobi-components
# OR
yarn add vobi-components
```

* Use in your project:

```jsx
import React from 'react';
import Button from 'vobi-components/Button';

const MyComponent = () =>
  <Button onClick={() => console.log('thanks for clicking :)')}>
    Click me!
  </Button>;
```

## Requirements
* Install dependencies with `npm`:
```sh
npm i
```

* Install `nvm` globally:
```sh
npm i -g nvm
```

* Run storybook:
```sh
npm run storybook
```

* Run storybook with docker:
```sh
docker-compose up -d --build
```

* Format code with prettier-eslint:
```sh
npm run format
```

## Contribution

Please refer contribution guide.

## License

This project is offered under MIT License.
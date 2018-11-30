## New York Times - Top Stories Feed

New York Times Top Stories feed app, buit using Top Stories API from [New York Times Developers](http://developer.nytimes.com/)

### Application Design

The app follows the methodology of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), separating the components to build a consistent, solid and reusable system, using nomenclatures from analogy with chemistry (atoms, molecules, organism and models).

References: [article reference](https://github.com/danilowoz/react-atomic-design), [project reference](https://github.com/danilowoz/react-atomic-design).

### Project Setup

- Clone the project :
  ```
    $ git clone https://github.com/igorabreu/nyttop
  ```

#### Run local without Docker

- Install [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
- Run:
  ```
    $ yarn install
    $ yarn start
  ```
- Tests :
  ```
    $ yarn test
  ```

#### Run with Docker

- Download and install [Docker](https://docs.docker.com/install/#nightly-builds)
- Run :
  ```
    $ make watch
  ```
- Tests :
  ```
    $ make test
  ```

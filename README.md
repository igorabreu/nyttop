## New York Times - Top Stories Feed

New York Times Top Stories feed app, buit using Top Stories API from [New York Times Developers](http://developer.nytimes.com/)

### Application Design

The app follows the methodology of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), separating the components to build a consistent, solid and reusable system, using nomenclatures from analogy with chemistry (atoms, molecules, organism and models).

<img width="100%" alt="atomic design" src="https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png">

References: [article reference](https://www.creativebloq.com/web-design/10-reasons-you-should-be-using-atomic-design-61620771), [project reference](https://github.com/danilowoz/react-atomic-design).

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

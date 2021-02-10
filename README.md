# STATE

# INSTALLATION

```shell script
$ npm i @hisho/state
```

# USAGE

## number

```typescript
import {State} from '@hisho/state';

const state = new State(0);
state.getState; //0
state.setState(prevState => prevState + 1)
state.getState; //1
state.setState(prevState => prevState + 5);
state.getState; //6
state.setState(5);
state.getState; //5
state.reset();
state.getState; //0
```

## Object

```typescript
import {State} from '@hisho/state';
const state = new State({
  test: 1,
  test2: 3
});
state.getState; //{test: 1,test2: 3}
state.setState((prevState => ({...prevState, test: 5})));
state.getState; // {test: 5, test2: 3}
state.setState((prevState => ({...prevState, test: prevState.test +1})));
state.getState; // {test: 6, test2: 3}
state.setState((prevState => ({...prevState, test: prevState.test +1})));
state.getState; // {test: 7, test2: 3}
state.setState((prevState => ({...prevState, test2: prevState.test2 +1})));
state.getState; // {test: 7, test2: 4}
state.reset();
state.getState; //{test: 1,test2: 3}
```

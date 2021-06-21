# STATE

## Features
- typescript files

## Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Install

```shell script
$ npm i @hisho/state
```

### libs

```typescript
import {State} from '@hisho/state';
```

### types

```typescript
import {StateOnType, StateCallBack} from '@hisho/state';
```

## Usage

### number

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

### Object

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

## API

### State
`initialState: (S | (() => S))`
```typescript
new State(0);

const sum = (x,y) => x + y;
new State(sum(1,3));
```

### getState
return current state `S`
```typescript
const state = new State(0);
state.getState //0
```

### setState
`newState: (S | ((prevState: S) => S))`
```typescript
const state1 = new State(0);
state1.setState(5); //5
state1.setState(prevState => prevState + 1); //6

const state2 = new State({hoge:1, huga:'2'});
state1.setState({hoge:5, huga:'2'}); //{hoge:5, huga:'2'}
state1.setState(prevState => ({...prevState, hoge: prevState.hoge + 5})); //{hoge:10, huga:'2'}
```

### reset
set initial state
```typescript
const state1 = new State(0);
state1.setState(5); //5
state1.setState(prevState => prevState + 1); //6
state1.reset(); //0

const state2 = new State({hoge:1, huga:'2'});
state2.setState({hoge:5, huga:'2'}); //{hoge:5, huga:'2'}
state2.setState(prevState => ({...prevState, hoge: prevState.hoge + 5})); //{hoge:10, huga:'2'}
state2.reset() //{hoge:1, huga:'2'}
```

### on
on change state
- type: `subscribe`
- callBack?: `<S>(currentState: S) => void`

```typescript
const state1 = new State(0);
state1.on('subscribe', (currentState) => {
  console.log('currentState is' + currentState);
});
state1.setState(5); //currentState is 5
state1.setState(prevState => prevState + 1); //currentState is 6
state1.reset(); //currentState is 0
```


## License

[MIT © hisho](./LICENSE)

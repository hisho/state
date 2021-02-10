# STATE

# INSTALLATION

```shell script
$ npm i @hisho/state
```

```typescript
import {State} from '@hisho/state';

new State(1);
// or
new State({
  initialstate: 1
});
```


# USAGE

```typescript
const state = new State(0);

state.getState(); //0

state.setState(prevState => prevState + 1);

state.getState(); //1

state.setState(prevState => prevState + 5);

state.getState(); //6

state.setState(0);

state.getState(); //0
```

```typescript
const state = new State(0);
state.getState(); //0	
state.setState(prevState => prevState + 1);
	
state.getState(); //1
	
state.setState(prevState => prevState + 5);
	
state.getState(); //6
	
state.setState(0);
	
state.getState(); //0
```

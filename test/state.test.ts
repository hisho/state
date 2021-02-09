import {State} from "../src/state";

describe('State', (): void => {
  describe('constructor', (): void => {
    test('instance生成', (): void => {
      const state = new State(1);
      expect(state).toBeDefined();
      expect(state.getState).toBeDefined();
      expect(state.setState).toBeDefined();
    });
  });

  describe('getState', (): void => {
    test('numberのstateをgetする', (): void => {
      const state = new State(1);
      const currentState = state.getState;
      expect(currentState).toEqual(1);
    });
    test('objectのstateをgetする', (): void => {
      const state = new State({
        initialState: 2
      });
      const currentState = state.getState;
      expect(currentState).toEqual({
        initialState: 2
      });
    });
  });

  describe('setState', (): void => {
    test('現在のstateを5にする', (): void => {
      const state = new State(1);
      state.setState(5);
      const currentState = state.getState;
      expect(currentState).toEqual(5);
    });

    test('現在のstateを前のstate+5にする', (): void => {
      const state = new State(1);
      state.setState(prevState => (prevState + 5));
      const currentState = state.getState;
      expect(currentState).toEqual(6);
    });

    test('現在の{initialState}を5にする', (): void => {
      const state = new State({
        initialState: 2
      });
      state.setState({
        initialState: 5
      });
      const currentState = state.getState;
      expect(currentState).toEqual({
        initialState: 5
      });
    });

    test('現在の{initialState}を前の{initialState} + 5にする', (): void => {
      const state = new State({
        initialState: 2
      });
      state.setState(prevState => ({...prevState,initialState: prevState.initialState + 5}));
      const currentState = state.getState;
      expect(currentState).toEqual({
        initialState: 7
      });
    });

    test('現在の{initialState,test}の{initialState}を5にする', (): void => {
      const state = new State({
        initialState: 2,
        test: 'test'
      });
      state.setState(prevState => ({...prevState,initialState: 5}));
      const currentState = state.getState;
      expect(currentState).toEqual({
        initialState: 5,
        test: 'test'
      });
    });

    test('現在の{initialState,test}の{initialState}を前の{initialState} + 5にする', (): void => {
      const state = new State({
        initialState: 2,
        test: 'test'
      });
      state.setState(prevState => ({...prevState,initialState: prevState.initialState + 5}));
      const currentState = state.getState;
      expect(currentState).toEqual({
        initialState: 7,
        test: 'test'
      });
    });
  });
})

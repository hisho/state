/**
 * 状態を管理するClass
 */
export class State<S> {
  private state: S
  private readonly initialState: S

  /**
   * 初期値を受け取ってstateに代入する
   * @param initialState 初期値
   */
  constructor(initialState: (() => S) | S) {
    if (initialState instanceof Function) {
      this.state = initialState();
    } else {
      this.state = initialState;
    }
    this.initialState = this.state;
  }

  /**
   * 現在のstateを返す関数
   * @return 現在のstateの値
   */
  get getState(): S {
    return this.state;
  }

  /**
   * 新しいstateを受け取ってthis.stateを更新する関数
   * @param newState 新しいstateの値または新しいstateの値を返す関数
   */
  public readonly setState = (newState: (S | ((prevState: S) => S))): void => {
    if (newState instanceof Function) {
      this.state = newState(this.state);
    } else {
      this.state = newState;
    }
  }

  /**
   * 現在のstateを初期値に戻す関数
   */
  public readonly reset = (): void => {
    this.state = this.initialState
  }
}

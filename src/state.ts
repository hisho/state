export type StateOnType = 'subscribe';
export type StateCallBack = <S>(currentState: S) => void;

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
   * stateが更新されたら実行される関数
   * subscribeを通して登録する
   */
  private subscribe?: StateCallBack = undefined;

  /**
   * typeの値のcallback関数を登録する関数
   * @param type - subscribe
   * @param callBack - currentStateを受け取り何かする関数
   */
  public readonly on = (type: StateOnType, callBack?: StateCallBack): void => {
    switch (type) {
      case 'subscribe':
        this.subscribe = callBack;
        break;
      default:
        console.error(`${type} does not exist!`)
    }
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

export declare type StateOnType = 'subscribe';
export declare type StateCallBack = <S>(currentState: S) => void;
/**
 * 状態を管理するClass
 */
export declare class State<S> {
    private state;
    private readonly initialState;
    /**
     * 初期値を受け取ってstateに代入する
     * @param initialState 初期値
     */
    constructor(initialState: (S | (() => S)));
    /**
     * 現在のstateを返す関数
     * @return 現在のstateの値
     */
    get getState(): S;
    /**
     * stateが更新されたら実行される関数
     * subscribeを通して登録する
     */
    private subscribe?;
    /**
     * typeの値のcallback関数を登録する関数
     * @param type - subscribe
     * @param callBack - currentStateを受け取り何かする関数
     */
    readonly on: (type: StateOnType, callBack?: StateCallBack | undefined) => void;
    /**
     * 新しいstateを受け取ってthis.stateを更新する関数
     * @param newState 新しいstateの値または新しいstateの値を返す関数
     */
    readonly setState: (newState: S | ((prevState: S) => S)) => void;
    /**
     * 現在のstateを初期値に戻す関数
     */
    readonly reset: () => void;
}

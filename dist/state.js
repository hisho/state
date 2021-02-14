/**
 * 状態を管理するClass
 */
export class State {
    /**
     * 初期値を受け取ってstateに代入する
     * @param initialState 初期値
     */
    constructor(initialState) {
        /**
         * stateが更新されたら実行される関数
         * subscribeを通して登録する
         */
        this.subscribe = undefined;
        /**
         * typeの値のcallback関数を登録する関数
         * @param type - subscribe
         * @param callBack - currentStateを受け取り何かする関数
         */
        this.on = (type, callBack) => {
            switch (type) {
                case 'subscribe':
                    this.subscribe = callBack;
                    break;
                default:
                    console.error(`${type} does not exist!`);
            }
        };
        /**
         * 新しいstateを受け取ってthis.stateを更新する関数
         * @param newState 新しいstateの値または新しいstateの値を返す関数
         */
        this.setState = (newState) => {
            if (newState instanceof Function) {
                this.state = newState(this.state);
            }
            else {
                this.state = newState;
            }
        };
        /**
         * 現在のstateを初期値に戻す関数
         */
        this.reset = () => {
            this.state = this.initialState;
        };
        if (initialState instanceof Function) {
            this.state = initialState();
        }
        else {
            this.state = initialState;
        }
        this.initialState = this.state;
    }
    /**
     * 現在のstateを返す関数
     * @return 現在のstateの値
     */
    get getState() {
        return this.state;
    }
}
//# sourceMappingURL=state.js.map
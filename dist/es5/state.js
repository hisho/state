/**
 * 状態を管理するClass
 */
var State = /** @class */ (function () {
    /**
     * 初期値を受け取ってstateに代入する
     * @param initialState 初期値
     */
    function State(initialState) {
        var _this = this;
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
        this.on = function (type, callBack) {
            switch (type) {
                case 'subscribe':
                    _this.subscribe = callBack;
                    break;
                default:
                    console.error(type + " does not exist!");
            }
        };
        /**
         * 新しいstateを受け取ってthis.stateを更新する関数
         * @param newState 新しいstateの値または新しいstateの値を返す関数
         */
        this.setState = function (newState) {
            if (newState instanceof Function) {
                _this.state = newState(_this.state);
            }
            else {
                _this.state = newState;
            }
        };
        /**
         * 現在のstateを初期値に戻す関数
         */
        this.reset = function () {
            _this.state = _this.initialState;
        };
        if (initialState instanceof Function) {
            this.state = initialState();
        }
        else {
            this.state = initialState;
        }
        this.initialState = this.state;
    }
    Object.defineProperty(State.prototype, "getState", {
        /**
         * 現在のstateを返す関数
         * @return 現在のstateの値
         */
        get: function () {
            return this.state;
        },
        enumerable: false,
        configurable: true
    });
    return State;
}());
export { State };
//# sourceMappingURL=state.js.map
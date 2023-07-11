export class Async_await {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;
    }

    // Example
    test() {
        const asyncFn = async () => {
            return 'Success'
        }

        asyncFn()
            .then(value => console.log(value));
    }

}








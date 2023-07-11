export class Promises {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;
    }

    oneMethodePromise() {
        const promiseOne = new Promise((resolve, reject) => {
            fetch('http://localhost:3000/users')
                .then(response => {
                    return response.json();
                })
                .then(json => console.log(json))
                .catch(error => {
                    console.log(error)
                });
        })

        function asynchronousTask() {
            return new Promise((resolve, reject) => {
                // Führe hier asynchrone Aufgaben aus
                if (true) {
                    resolve();
                } else {
                    reject();
                }
            });
        }

        asynchronousTask()
            .then(result => {
                // Verarbeite das Ergebnis der asynchronen Aufgaben
               //console.log(result);
            })
            .catch(error => {
                // Verarbeite den Fehler, falls es einen gibt
                // console.error(error);
            });
    }
}








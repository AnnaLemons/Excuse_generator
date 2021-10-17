const WHO = ['She', 'My dog', 'Aliens', 'A gremlin', 'A monkey', 'My neighbor'];
const ACTION = ['accidentally broke', 'peed', 'stole', 'ate'];
const THING = ['my book', 'my homework', 'my credit card', 'my watch'];
const WHERE = ['in the street', 'at the cinema', 'at the party', 'at home'];
const WHEN = ['1O minutes ago.', 'last year.', 'last week.', 'yesterday.']



window.onload = () => {

    document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
    });

    };


    let generateExcuse = () => {

        let whoIndex= Math.floor(Math.random() * WHO.length);
        let actionIndex = Math.floor(Math.random() * ACTION.length);
        let thingIndex = Math.floor(Math.random() * THING.length);
        let whereIndex = Math.floor(Math.random() * WHEN.length);
        let whenIndex = Math.floor(Math.random () * WHERE.length);

    return WHO[whoIndex] + ' ' + ACTION[actionIndex] + ' ' + THING[thingIndex] + ' ' + WHERE[whenIndex] + ' ' + WHEN[whereIndex];
    };

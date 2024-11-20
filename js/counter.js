import { CountUp } from '/node_modules/countup.js/dist/countUp.min.js';

const options = {
    suffix: '+',
};
let counter1 = new CountUp('counter', 95, {
    suffix: '%'
});
let counter2 = new CountUp('counter2', 10, options);
let counter3 = new CountUp('counter3', 10000, options);
if (!counter1.error) {
    counter1.start();
    counter2.start();
    counter3.start();
} else {
    console.error(counter1.error);
    console.error(counter2.error);
    console.error(counter3.error);
}

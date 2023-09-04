const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20, 25, 30, 35];
console.log(people);

// module.exports = 'hello'; //makes xyz equal to 'hello';

//module.exports = people; //makes xyz equal to the arrays mentioned above!

module.exports = {
    people: people,
    ages: ages
}; //exports BOTH arrays above, this is a method to export multiple values! As xyz comes back as an empty object!
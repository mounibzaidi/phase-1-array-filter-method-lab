const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().includes(query.toLowerCase()));
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().indexOf(query.toLowerCase()) === 0);
}

function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}
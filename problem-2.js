const friends = ['hanif', 'romzan', 'belal', 'samsuzzaman', 'jillur'];

const eachEventElement = frieds => {
    let eventElemetFriends = [];
    for (let friend of friends) {
        if ((friend.length) % 2 === 0) {

            eventElemetFriends.push(friend)
        }
    }
    return eventElemetFriends;
}


console.log(eachEventElement(friends));
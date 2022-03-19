var userAge = [17 , 19];

var is_subscribed = [true , false];

// Initialized two arrays and used a 'for' loop to go through my conditional statement
    for (i = 0; i < 1; i++) {
        if (userAge[i] < 18 && (is_subscribed[i] = false)) {
            console.log ('User is under 18 and not a sub');
        } else if (userAge[i] > 18 && (is_subscribed[i] = false)) {
            console.log('User is over 18 and is not a sub');
        } else if (userAge[i] < 18 && (is_subscribed[i] = true)) {
            console.log('User is under 18 and is a sub');
        } else (userAge[i] > 18 && (is_subscribed[i] = true));
            console.log('User is over 18 and is sub');
    }
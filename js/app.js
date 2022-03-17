var userAge = 18

is_subscribed = false

if (userAge < 18 && (is_subscribed = false)) {
    console.log ('User is under 18 and not a sub');
} else if (userAge >= 18 && (is_subscribed = false)) {
    console.log('User is over 18 and is not a sub');
} else if (userAge < 18 && (is_subscribed = true)) {
    console.log('User is under 18 and is a sub');
} else (userAge >= 18 && (is_subscribed = true));
    console.log('User is over 18 and is sub');

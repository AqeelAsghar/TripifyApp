export const IMAGES = {
 TRIFIFY_BANNER: require('./images/Tripify-banner1.png'),
 TRIPS_EMPTY: require('./images/trips-empty.png'),
 EXPENSE_EMPTY: require('./images/expense-empty.png'),
 ADD_EXPENSE: require('./images/add-expense.png'),
};
export const ICONS = {
    BACK : require('./icons/back-arrow.png'),
}
export const THUMBNAILS = {
    1: require('./images/trip_thumbnails/1.png'),
    2: require('./images/trip_thumbnails/2.png'),
    3: require('./images/trip_thumbnails/3.png'),
    4: require('./images/trip_thumbnails/4.png'),
    5: require('./images/trip_thumbnails/5.png'),
    6: require('./images/trip_thumbnails/6.png'),
    7: require('./images/trip_thumbnails/7.png'),
}
/*This function generate Random thumnails */
export const RANDOM_THUMBNAIL =()=>{
    const rand = Math.floor(Math.random() * 7);
    return THUMBNAILS[rand];
}



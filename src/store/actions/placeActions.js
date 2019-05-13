export const createPlace = (place) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log('making a async call', place);
        const firestore = getFirestore();
        firestore.collection('tours').doc(place.tourId).collection('places').add({
            title: place.title,
            adress: place.adress,
            date: place.date,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PLACE',
                payload: place
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PLACE_ERROR',
                err
            });
        });
    }
}
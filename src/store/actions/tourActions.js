export const createTour = (tour) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log('making a async call', tour);
        const firestore = getFirestore();
        firestore.collection('tours').add({
            title: tour.tourTitle,
            userId: 1234,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_TOUR',
                payload: tour
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_TOUR_ERROR',
                err
            });
        });
    }
}
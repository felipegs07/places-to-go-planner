export const createTour = (tour) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log('making a async call', tour);
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        firestore.collection('tours').add({
            title: tour.tourTitle,
            userId: userId,
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
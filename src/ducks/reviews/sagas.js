// import { takeLatest, put, delay } from 'redux-saga/effects';
// // import { GET_USER_QUERY_REQUESTED, getUserQueryFailed, getUserQuerySucceeded } from './actions';
//
// export function* getUserQuerySaga(action) {
//     try {
//         const response = yield fetch(action.payload);
//         let queryData = yield response.json();
//         if (queryData.length === 0 || response.status >= 400) {
//             yield put(getUserQuerySucceeded(null));
//             yield put(getUserQueryFailed('404 page not found'));
//             queryData = null;
//         }
//         yield put(getUserQuerySucceeded(queryData));
//     } catch (e) {
//         yield put(getUserQueryFailed(e.message));
//     }
// }
export default function* reviewsSaga() {
    yield([]);
    // yield takeLatest(GET_USER_QUERY_REQUESTED, getUserQuerySaga);
}

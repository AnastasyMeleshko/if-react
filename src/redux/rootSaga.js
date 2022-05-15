import { all } from "redux-saga/effects";
import reviewsSaga from "../ducks/reviews/sagas";

export default function* rootSaga() {
    yield all([reviewsSaga()]);
}
//
console.log(Date.parse(new Date()));


import { all,call, takeEvery, takeLeading, takeLatest, put, select } from "redux-saga/effects";
import {requestRandomUser,requestRandomUserSuccess, requestRandomUserFailure} from '../reducers/randomUserSlice'

function* generateRandomUser () {
    try {
    let pageNumber = yield select(state => state.randomUser.pageNumber)
    const response = yield call(fetch, `https://randomuser.me/api/?results=10&page=${pageNumber}`);
    const randomuUser = yield response.json(); // HERE is what you want
    console.log(randomuUser.results)
    yield put({type: requestRandomUserSuccess.type, payload: [...randomuUser.results]}) //action
    } catch (error) {
        console.log(error)
        yield put({type: requestRandomUserFailure.type}) //action
    }
}

function* watcherSaga () {
    yield takeLatest(requestRandomUser.type, generateRandomUser) //type, fn
}

export default watcherSaga;
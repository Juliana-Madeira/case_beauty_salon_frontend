import { all } from 'redux-saga/effects'

import appointment from './modules/appointment/saga';

export default function* rootSaga() {
    return yield all([appointment])
}
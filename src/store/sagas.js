
import { takeLatest, all } from 'redux-saga/effects';

import asyncRequestNotifications from './notifications/saga';

export default function* root() {
    yield all([
        takeLatest('REQUEST_NOTIFICATIONS', asyncRequestNotifications),
    ]);
}
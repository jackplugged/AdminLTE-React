import { put, call, all } from "redux-saga/effects";
import { makeData, Notification, Task, User } from "./fake-notifications";

function apiGetNotifications() {
  const request = new Promise((resolve, reject) => {
    resolve(makeData(Notification));
  });
  return request;
}

function apiGetTasksNotifications() {
  return new Promise((resolve, reject) => {
    resolve(makeData(Task));
  });
}

function apiGetUserNotifications() {
  return new Promise((resolve, reject) => {
    resolve(makeData(User));
  });
}

export default function* asyncRequestNotifications(action) {
  try {
    const [tasks, notifications, messages] = yield all([
      call(apiGetTasksNotifications),
      call(apiGetNotifications),
      call(apiGetUserNotifications)
    ]);

    yield put({
      type: "SUCCESS_NOTIFICATIONS",
      payload: { data: { notifications, tasks, messages } }
    });
  } catch (error) {
    yield put({ type: "FALILURE_NOTIFICATIONS", payload: { data: [] } });
  }
}

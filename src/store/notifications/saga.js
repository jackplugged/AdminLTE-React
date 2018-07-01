import { put, call, all } from "redux-saga/effects";

function apiGetNotifications() {
  const request = new Promise((resolve, reject) => {
    resolve([
      { id: 1, color: "aqua", text: "4 novos usuários", icon: "users" },
      { id: 2, color: "red", text: "2 problemas encontrados", icon: "warning" },
      { id: 3, color: "yellow", text: "1 item pendente", icon: "shopping-cart"},
      { id: 4, color: "yellow", text: "Hora de deitar", icon: "shopping-cart" }
    ]);
  });

  return request;
}

function apiGetTasksNotifications() {
  return new Promise((resolve, reject) => {
    resolve([
      { id: 1, color: "aqua", text: "4 novos usuários", percent: 36.8 },
      { id: 2, color: "red", text: "2 problemas encontrados", percent: 49.7 },
      { id: 3, color: "yellow", text: "1 item pendente", percent: 88.7 },
      { id: 4, color: "yellow", text: "Hora de deitar", percent: 99.1 }
    ]);
  });
}

function apiGetUserNotifications() {
  return new Promise((resolve, reject) => {
    resolve([
      { id: 1, img: "http://placehold.it/128x128", name: "Developers",  time: 5, message: "Control-c Control-v" },
      { id: 2, img: "http://placehold.it/128x128", name: "Designers",  time: 3, message: "Be Free" }
    ]);
  });
}

export default function* asyncRequestNotifications(action) {
  try {
    const [tasks, notifications, messages ] = yield all([
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

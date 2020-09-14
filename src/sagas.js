import { takeLatest, put, call } from "redux-saga/effects";

async function githubUsersFetch () {
  const usersJson = await fetch("https://api.github.com/users");
  if (!usersJson.ok) {
    throw new Error()
  }
  const usersData = await usersJson.json();
  return usersData
}

function* fetchUsers() {
  try {
    const data = yield call(githubUsersFetch);
    yield put({ type: "request/resolved", payload: data });
  } catch (e) {
    yield put({ type: "request/rejected" });
  }
}

function* sagas() {
  yield takeLatest("request", fetchUsers);
}

export default sagas;
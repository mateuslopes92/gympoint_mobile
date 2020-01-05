export function signInRequest(studentId) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { studentId },
  };
}

export function signInSuccess(token, student) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, student },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

// redux-token-auth-config.js
import { generateAuthActions } from "redux-token-auth"
import { AUTH_URL } from "utils/apiEndpoints"

const config = {
  AUTH_URL,
  userAttributes: {
    name: "name",
  },
  userRegistrationAttributes: {
    name: "name",
  },
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}

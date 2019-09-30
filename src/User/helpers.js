import { pipe } from "ramda";

function getFirstResult({ data }) {
  return data.results[0];
}

function trimUserDetails({ name, picture }) {
  return {
    name,
    picture
  };
}

const getAndTrimUser = pipe(
  getFirstResult,
  trimUserDetails
);

export { trimUserDetails, getFirstResult, getAndTrimUser };

export default {
  trimUserDetails,
  getFirstResult,
  getAndTrimUser
};

module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "babel-jest",
    "^.+\\.tsx$": "babel-jest",
    "^.+\\.svelte$": "svelte-jester",
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "svelte", "tsx", "ts"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

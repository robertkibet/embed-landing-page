// NOTE: this is to mimic a service that would be used to fetch some data, so a delay is added to simulate a service call
// This simulator will fail once in a while to simulate an error from api side :P and throw an error message

const completeFetchSteps = () =>
  new Promise((resolve) => setTimeout(resolve, 500));

const isRequestSuccessful = () => {
  const errorFrequency = 0.5;
  return Math.random() >= errorFrequency;
};

const getStepsData = () => {
  const delay = (0.5 + Math.random() * 2) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      completeFetchSteps().then(() => {
        if (isRequestSuccessful()) {
          resolve(true);
        } else {
          reject(new Error("The request has timed out, please try again"));
        }
      });
    }, delay);
  });
};

const GetStepsData = {
  getStepsData,
};

export default GetStepsData;

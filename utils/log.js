const newLog = "newLog";

const success = "success";               //[200]

const validation = "validation";         //[400?]
const validRequest = "validRequest";     //[!400]
const invalidRequest = "invalidRequest"; //[400]

const serverError = "serverError";       //[503]

const greekTimeOptions = { timeZone: "Europe/Athens" };

async function log(
  endpoint, 
  type, 
  data, 
  extramsg 
) {
  const Log = (msg) => {
    console.log(
      endpoint +
        " " +
        msg +
        (extramsg ? extramsg : "") +
        " " +
        (data ? JSON.stringify(data) : "")
    );
  };

  switch (type) {
    // For each new log in API usage, include date, time, and path (new line).
    case newLog:
      console.log(
        `-----[${new Date().toLocaleString(
          "en-GB",
          greekTimeOptions
        )}] New request ${endpoint}`
      );
      break;

    // 200
    case success:
      Log("Success [200]");
      break;

    // 400
    case validation:
      Log("Validating: ");
      break;
    case validRequest:
      Log("The Request is Valid");
      break;
    case invalidRequest:
      Log("The Request is Invalid [400] ");
      break;

    case serverError:
      Log("Internal server error [503] ");
      break;
  }
}

module.exports = {
  log,
  newLog,
  success,
  validation,
  validRequest,
  invalidRequest,
  serverError,
};

export const addToFavAction = (jobObj) => ({
  type: "ADD_JOB_TO_FAV",
  payload: jobObj,
});

export const removeFromFavAction = (jobObj) => ({
  type: "REMOVE_FROM_FAV",
  payload: jobObj,
});

export const getSearchResultsAction = (e, location, position) => {
  e.preventDefault();
  return async (dispatch, getState) => {
    if (e) {
      console.log("Fetching...");
      console.log(location);
      console.log(position);
      let locationQuery = `location=${location}`;
      let positionQuery = `description=${position}`;
      let baseUrl = "https://jobs.github.com/positions.json";
      try {
        let resp = await fetch(`${baseUrl}?${positionQuery}&${locationQuery}`);
        if (resp.ok) {
          let results = await resp.json();
          dispatch({
            type: "GET_JOBLIST",
            payload: results,
          });
        } else {
          console.log("error");
          setTimeout(() => {
            dispatch({
              type: "GET_BOOKS_TOGGLE_ERROR",
            });
            setTimeout(() => {
              dispatch({
                type: "GET_BOOKS_TOGGLE_ERROR",
              });
            }, 5000);
          }, 1000);
        }
      } catch (error) {
        console.log("error");
        setTimeout(() => {
          dispatch({
            type: "GET_BOOKS_TOGGLE_ERROR",
          });
          setTimeout(() => {
            dispatch({
              type: "GET_BOOKS_TOGGLE_ERROR",
            });
          }, 5000);
        }, 1000);
      }
    }
  };
};

export const getJobDetailAction = (jobId) => {
  return async (dispatch, getState) => {
    if (jobId) {
      console.log("Fetching2...");
      try {
        let resp = await fetch(
          `https://jobs.github.com/positions/${jobId}.json`
        );
        if (resp.ok) {
          let results = await resp.json();
          dispatch({
            type: "GET_JOB_DETAIL",
            payload: results,
          });
        } else {
          console.log("error");
          setTimeout(() => {
            dispatch({
              type: "GET_BOOKS_TOGGLE_ERROR",
            });
            setTimeout(() => {
              dispatch({
                type: "GET_BOOKS_TOGGLE_ERROR",
              });
            }, 5000);
          }, 1000);
        }
      } catch (error) {
        console.log("error");
        setTimeout(() => {
          dispatch({
            type: "GET_BOOKS_TOGGLE_ERROR",
          });
          setTimeout(() => {
            dispatch({
              type: "GET_BOOKS_TOGGLE_ERROR",
            });
          }, 5000);
        }, 1000);
      }
    }
  };
};

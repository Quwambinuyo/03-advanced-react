import { useState, useEffect } from "react";

/**
 * Custom Hook: useFetchPerson
 *
 * This hook fetches user data from a given API URL and manages loading, error, and response states.
 * It uses the `useEffect` hook to perform the fetch operation when the URL changes.
 *
 * Features:
 * - `isLoading`: Tracks whether data is still being fetched.
 * - `isError`: Tracks if an error occurs during the fetch request.
 * - `user`: Stores the fetched user data (initialized as an empty object to prevent errors).
 *
 * How it Works:
 * - The `fetchUser` function asynchronously fetches data from the provided URL.
 * - If the request fails (e.g., network error or invalid response), `isError` is set to `true`.
 * - Once data is successfully fetched, it updates the `user` state.
 * - `useEffect` ensures that data is fetched whenever the `url` changes.
 *
 * @param {string} url - The API endpoint to fetch user data from.
 * @returns {object} An object containing `isLoading`, `isError`, and `data`.
 */

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({}); // Ensure user has an initial empty object

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const userResponse = await response.json();
        setData(userResponse);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { isLoading, isError, data };
};

export default useFetch;

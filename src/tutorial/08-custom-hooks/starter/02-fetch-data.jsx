import useFetch from "./useFetch";

const url = "https://api.github.com/users/QuincyLarson";

/**
 * FetchData Component
 *
 * This component fetches and displays user data from GitHub using the `useFetchPerson` custom hook.
 * It handles different states: loading, error, and successful data retrieval.
 *
 * Features:
 * - Displays a loading message while fetching data.
 * - Shows an error message if the API request fails.
 * - Renders user details (avatar, name, company, and bio) after successful data retrieval.
 * - Provides fallback values for missing data to prevent `undefined` display.
 *
 * @returns {JSX.Element} A UI displaying the fetched user data.
 */
const FetchData = () => {
  const { isLoading, isError, data } = useFetch(url);

  // Show loading message while fetching data
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // Show error message if API request fails
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  // Handle case where user data is empty
  if (!data || Object.keys(data).length === 0) {
    return <h2>No user data available</h2>;
  }

  // Destructure safely after ensuring user data is available
  const { avatar_url, name, company, bio } = data;

  return (
    <div>
      <img
        style={{ width: "100px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>Works at {company || "Unknown Company"}</h4>
      <p>{bio || "No bio available."}</p>
    </div>
  );
};

export default FetchData;

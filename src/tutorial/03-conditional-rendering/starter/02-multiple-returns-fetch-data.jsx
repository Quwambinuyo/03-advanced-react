import { useEffect, useState } from "react";

// GitHub API URL for fetching user data
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  // State to store user data
  const [user, setUser] = useState(null);
  // State to handle loading state
  const [isLoading, setIsLoading] = useState(true);
  // State to handle error state
  const [isError, setIsError] = useState(false);

  // useEffect runs once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(url);

        // Check if the response is not OK (e.g., 404 or 500 error)
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        // Parse response JSON
        const data = await response.json();
        // Update state with fetched user data
        setUser(data);
      } catch (error) {
        // Handle any errors that occur during the fetch process
        setIsError(true);
      }

      // Set loading state to false after fetching data
      setIsLoading(false);
    };

    // Call the fetch function
    fetchData();
  }, []); // Empty dependency array ensures it runs only once

  // Display loading message while fetching data
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // Display error message if fetching fails
  if (isError) {
    return <h2>There was an error..</h2>;
  }

  const { avatar_url, name, company, bio } = user;

  // Render user data once fetched successfully
  return (
    <>
      <h2>Fetch Data</h2>
      <div>
        <img
          style={{ width: "150px", borderRadius: "25px" }}
          src={avatar_url}
          alt={name}
        />
        <h2>{name}</h2>
        <h4>Works at {company}</h4>
        <p>{bio}</p>
      </div>
    </>
  );
};

export default MultipleReturnsFetchData;

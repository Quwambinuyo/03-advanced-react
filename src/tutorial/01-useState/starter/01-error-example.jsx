const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;

    console.log(count);
  };

  return (
    <>
      <h2>useState error example</h2>

      <div>{count}</div>
      <button onClick={handleClick} type="button" className="btn">
        Increase
      </button>
    </>
  );
};

export default ErrorExample;

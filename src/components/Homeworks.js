const Homeworks = ({ data }) => {
  return (
    <div className="bg-light">
      <div className="text-center">Homeworks</div>
      {data &&
        data.homework.map((d, index) => (
          <ul>
            <li key={index}>{d.toUpperCase()}</li>
          </ul>
        ))}
    </div>
  );
};

export default Homeworks;

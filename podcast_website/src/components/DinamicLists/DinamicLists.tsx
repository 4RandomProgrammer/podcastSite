const DinamicList = ({ title, elements }) => {
  return (
    <ul>
      <li>{title}</li>
      {elements.map((htlmElement, index) => {
        <li key={index}>{htlmElement}</li>;
      })}
    </ul>
  );
};

export default DinamicList;



const DinamicList = ({ title, elements }) => {
  // console.log(elements)
  return (
    <ul className="flex flex-col border-l-2 border-l-black pl-8">
      <li className="font-bold" >{title}</li>
      {elements.map((htlmElement, index) => {
        return <li className="mt-4 w-full" key={index}>{htlmElement}</li>
      })}
    </ul>
  );
};

export default DinamicList;

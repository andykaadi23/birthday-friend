const Person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image} alt={name} />
      <div>
        {name}
        {age}
      </div>
    </article>
  );
};
export default Person;

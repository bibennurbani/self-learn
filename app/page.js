import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  function handleClick() {
    console.log("increment like count");
    setLikes((prevLikes) => prevLikes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <p>Home Page</p>
      <LikeButton />
    </div>
  );
}

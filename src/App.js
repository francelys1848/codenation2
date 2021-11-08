import "./styles.css";

function roster(name, pronouns, school, year, color) {
  return (
    <div class="row">
      <div class="red">{name}</div>
      <div>{pronouns}</div>
      <div class="red">{school}</div>
      <div>{year}</div>
      <div class="red">{color}</div>
    </div>
  );
}
export default function App() {
  const mikkail = roster(
    "Mikkail Allen",
    "He/ Him",
    "Williamsburg Charter High School",
    2022,
    "Rats"
  );
  const claudia = roster("Luna-Marcelino", "She/Hers", "P-TECH", 2022, "Cats");
  const francelys = roster(
    "Francelys Lomeli ",
    "She/Her",
    "france",
    2022,
    "dogs"
  );
  return (
    <div className="App">
      {mikkail}
      {claudia}
      {francelys}
    </div>
  );
}

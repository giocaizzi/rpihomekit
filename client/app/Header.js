import "./styles.css";

export function HomeButton() {
  return (
    <div className="homebutton">
      <p>Homekit</p>
    </div>
  );
}

export function Header() {
  return (
    <div className="header shadow">
      <HomeButton />
    </div>
  );
}

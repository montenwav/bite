import { Header } from "./Header.jsx";

export function Main() {
  return (
    <main>
      <Header />
      <Wallpaper />
    </main>
  );
}

const Wallpaper = () => {
  return (
    <section className="main_wallpaper">
      <div className="main_content_container">
        <div className="main_content">
          <h1>A better way to brush your teeth.</h1>
          <p>
            Toothpaste Bits without the plastic tubes or harsh chemicals that
            work.
          </p>
          <button className="button">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

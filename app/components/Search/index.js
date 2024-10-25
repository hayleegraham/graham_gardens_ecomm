import "./Search.scss";

export default function Search() {
  return (
    <form action="">
      <label htmlFor="search">SEARCH SEEDS:</label>
      <input className="search_input" type="text" id="search" name="search"></input>

      <input className="main_btn text-[13px]" type="submit" value="SEARCH"></input>
    </form>
  );
}

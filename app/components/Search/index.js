import "./Search.scss";

export default function Search() {
  return (
    <form className="flex flex-row justify-center gap-[10px] my-[30px] h-[26px]" action="">
      <label htmlFor="search">SEARCH SEEDS:</label>
      <input className="search_input w-[150px] sm:w-[300px]" type="text" id="search" name="search"></input>

      <input className="main_btn text-[13px] px-[10px] py-[5px]" type="submit" value="SEARCH"></input>
    </form>
  );
}

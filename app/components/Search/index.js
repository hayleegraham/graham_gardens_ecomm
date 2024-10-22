import "./Search.scss";

export default function Search() {
    return(
        <form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"></input>
  
  <input type="submit" value="Submit"></input>
</form>
    )
}
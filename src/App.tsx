import GetDeck from "./components/GetDeck";

function App() {
  /**
   * Challenge
   *
   * Background:
   * The Deck of Cards API expects us to provide the deck id
   * of the deck we're playing with so it can remember which
   * cards we've already drawn, how many are remaining in the
   * deck, etc.
   *
   * Task: save the deck_id from the returned data to a local
   * variable so we can use it later
   */

  return (
    <div className="text-center mt-10">
      <GetDeck />
    </div>
  );
}

export default App;

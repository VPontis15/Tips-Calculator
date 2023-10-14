import "./index";

export default function App() {
  return (
    <div className="container">
      <Bill />
      <ServiceRating />
      <FriendsServiceRating />
      <Total />
      <Button />
    </div>
  );
}

function Bill() {
  return (
    <div className="row">
      <label for="bill">How much was the bill?</label>
      <input type="text" id="bill"></input>
    </div>
  );
}

function ServiceRating() {
  return (
    <div className="row">
      <label for="service">How did you like the service</label>
      <select id="service">
        <option value={0.1}> It was good (10%)</option>
        <option value={0.15}> It was great (15%)</option>
        <option value={0.2}> Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function FriendsServiceRating() {
  return (
    <div className="row">
      <label for="friend">How did your friend the service</label>
      <select id="friend">
        <option value={0.1}> It was good (10%)</option>
        <option value={0.15}> It was great (15%)</option>
        <option value={0.2}> Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Total() {
  return (
    <div className="row">
      <h1>You pay $X ($X + $X tip)</h1>
    </div>
  );
}

function Button() {
  return (
    <div className="row">
      <button>Reset</button>
    </div>
  );
}

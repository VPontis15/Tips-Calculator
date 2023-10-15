import { useState } from "react";
import "./index";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0.1);

  function handleTip(e) {
    setTip(Number(e.target.value));
  }
  const [friendsTip, setFriendsTip] = useState(0.1);
  function handleFriendsTip(e) {
    setFriendsTip(Number(e.target.value));
  }

  function handleBill(e) {
    setBill((b) => Number(e.target.value));
  }

  function handleReset() {
    setBill(0);
    setTip(0.1);
    setFriendsTip(0.1);
  }

  return (
    <div className="container">
      <Bill bill={bill} onHandleBill={handleBill} />
      <ServiceRating onHandleTip={handleTip}>
        How did you like the service{" "}
      </ServiceRating>
      <FriendsServiceRating onHandleFriendsTip={handleFriendsTip}>
        How did your friend like the service
      </FriendsServiceRating>
      {bill > 0 && (
        <>
          <Total bill={bill} tip={tip} friendsTip={friendsTip} />
          <Button onHandleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onHandleBill }) {
  return (
    <div className="row">
      <label htmlFor="bill">How much was the bill?</label>
      <input
        onChange={(e) => onHandleBill(e)}
        value={bill}
        type="text"
        id="bill"
      ></input>
    </div>
  );
}

function ServiceRating({ onHandleTip, children }) {
  return (
    <div className="row">
      <label htmlFor="service">{children}</label>
      <select onChange={(e) => onHandleTip(e)} id="service">
        <option value={0.1}> It was good (10%)</option>
        <option value={0.15}> It was great (15%)</option>
        <option value={0.2}> Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function FriendsServiceRating({ onHandleFriendsTip, children }) {
  return (
    <div className="row">
      <label htmlFor="friend">{children}</label>
      <select onChange={(e) => onHandleFriendsTip(e)} id="friend">
        <option value={0.1}> He thought it was good (10%)</option>
        <option value={0.15}> He thought it was great (15%)</option>
        <option value={0.2}> He thought it was absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, tip, friendsTip }) {
  const totalTips = Math.round(bill * tip + friendsTip * bill) / 2;
  const total = bill + totalTips;
  return (
    <div className="row">
      <h3>
        You pay ${total} (${bill} + ${totalTips} tip)
      </h3>
    </div>
  );
}

function Button({ onHandleReset }) {
  return (
    <div className="row">
      <button
        onClick={() => {
          onHandleReset();
        }}
      >
        Reset
      </button>
    </div>
  );
}

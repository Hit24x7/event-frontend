import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [form, setForm] = useState({});
  const [qr, setQr] = useState(null);

  const submit = async () => {
    const res = await axios.post("http://192.168.29.241:5000/api/tickets/create", form);
    setQr(res.data.qrImage);
  };

  return (
    <div>
      <h2>Book Ticket</h2>
      <input placeholder="Event" onChange={e => setForm({...form, eventName: e.target.value})} />
      <input placeholder="Name" onChange={e => setForm({...form, userName: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <button onClick={submit}>Generate</button>
      {qr && <img src={qr} />}
    </div>
  );
}

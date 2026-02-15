import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.29.241:5000/api/tickets/all")
      .then(res => setTickets(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table border="1">
        <tr><th>Name</th><th>Email</th><th>Event</th><th>Used</th></tr>
        {tickets.map(t => (
          <tr key={t._id}>
            <td>{t.userName}</td>
            <td>{t.email}</td>
            <td>{t.eventName}</td>
            <td>{t.used ? "Yes" : "No"}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

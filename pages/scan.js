import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import axios from "axios";

export default function Scan() {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    scanner.render(async (text) => {
      const res = await axios.post("https://event-backend-production-cc3a.up.railway.app/api/tickets/validate", { token: text });
      alert(res.data.message);
    });
  }, []);

  return <div id="reader"></div>;
}

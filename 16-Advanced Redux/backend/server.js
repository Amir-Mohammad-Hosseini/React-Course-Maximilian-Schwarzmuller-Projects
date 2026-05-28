const http = require("http");

// cart را در حافظه نگه می‌داریم (فقط items)
let cart = {
  items: [],
};

const server = http.createServer((req, res) => {
  // 1) تنظیم CORS برای اجازه به فرانت
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // 2) هندل کردن preflight request (OPTIONS)
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // 3) GET /cart : برگرداندن cart فعلی
  if (req.url === "/cart" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(cart));
    return;
  }

  // 4) PUT /cart : دریافت cart جدید و ذخیره‌اش
  if (req.url === "/cart" && req.method === "PUT") {
    let body = "";

    // بدنه‌ی request را به‌صورت stream می‌گیریم
    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);

        if (!data || !Array.isArray(data.items)) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Invalid cart format" }));
          return;
        }

        cart.items = data.items;

        console.log("Cart updated:", cart);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Cart updated" }));
      } catch (err) {
        console.error("Error parsing JSON:", err);
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Invalid JSON" }));
      }
    });

    return;
  }

  // 5) اگر route دیگری بود:
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Not found" }));
});

// 6) گوش دادن روی پورت 5000
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
    
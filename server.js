require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/connect");

const PORT = process.env.PORT || 5000;

// Connect DB first, then start server
connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

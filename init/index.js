const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

const dbUrl = "mongodb+srv://shivam_pandey:QdyTQK4HA9btMnvO@cluster0.dmzyhmu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// console.log(dbUrl);

main()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "660fdad36317b663eff27337",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();

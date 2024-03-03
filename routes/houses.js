const express = require("express");
const router = express.Router();
const { getAllHouses, getHouseByName } = require("../dataAccess/housesDao.js");

const {
  log,
  newLog,
  success,
  validation,
  validRequest,
  invalidRequest,
  serverError,
} = require("../utils/log.js");

router.get("/", async (req, res) => {
  const about = "GET /houses";
  log(about, newLog);
  const { name } = req.query;

  try {
    if (!name) {
      log(about, success);
      const houses = await getAllHouses();
      res.status(200).json(houses);
    } else {
      if (typeof name === "string") {
        log(about, validation, { name });

        const filteredHouses = await getHouseByName(name);
        if (filteredHouses.length > 0) {
          log(about, validRequest);
          log(about, success);
          return res.status(200).json(filteredHouses);
        } else {
          log(
            about,
            invalidRequest,
            "",
            "No houses found matching the provided name"
          );
          return res
            .status(400)
            .send({ message: "No houses found matching the provided name" });
        }
      } else {
        log(about, invalidRequest, "", "Name must be a String");
        res.status(400).send({ message: "Name must be a String" });
      }
    }
  } catch {
    log(about, serverError);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;

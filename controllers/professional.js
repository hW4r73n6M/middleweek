const { getDb } = require("../DB/connection");
const { ObjectId } = require("mongodb");
const getAllProssionals = (req, res) => {
  const db = getDb();
  let professionals = [];
  db.collection("professional")
    .find()
    .forEach((professional) => professionals.push(professional))
    .then(() => {
      res.status(200).send(professionals[0]);
    })
    .catch(()=>{
        res.status(500).json({error:"Could not found documents"})
    })
};
module.exports={
    getAllProssionals
}
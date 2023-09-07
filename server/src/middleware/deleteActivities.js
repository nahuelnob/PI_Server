const deleteAct = require("../controllers/deleteAct");

const deleteActivities = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteAct(id);
    res.status(200).json({ message: "Acticvidad eliminada con exito" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = deleteActivities
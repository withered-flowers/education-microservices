const { Color } = require("../models/index");

const getColor = async (_req, res, next) => {
  try {
    const colors = await Color.findAll();

    res.status(200).json({
      statusCode: 200,
      data: colors,
    });
  } catch (err) {
    next(err);
  }
};

const putColor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, year, color } = req.body;

    await Color.update(
      {
        name,
        year,
        color,
      },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json({
      statusCode: 200,
      message: `Color with id ${id} has been updated successfully`,
    });
  } catch (err) {
    next(err);
  }
};

const deleteColor = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Color.destroy({
      where: { id },
    });

    res.status(200).json({
      statusCode: 200,
      message: `Color with id ${id} has been deleted successfully`,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getColor,
  putColor,
  deleteColor,
};

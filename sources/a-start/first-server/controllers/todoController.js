const { Todo } = require("../models/index.js");

const todoGetAll = async (_req, res, next) => {
  try {
    const todos = await Todo.findAll();

    res.status(200).json({
      statusCode: 200,
      data: todos,
    });
  } catch (err) {
    next(err);
  }
};

const todoPost = async (req, res, next) => {
  try {
    const { name } = req.body;

    const { id: newTodoId } = await Todo.create({
      name,
    });

    res.status(201).json({
      statusCode: 201,
      message: `${newTodoId} has been created successfully !`,
    });
  } catch (err) {
    next(err);
  }
};

const todoDelete = async (req, res, next) => {
  const { id } = req.params;

  await Todo.destroy({
    where: {
      id: Number(id),
    },
  });

  res.status(200).json({
    statusCode: 200,
    message: `Todo with id ${id} has been deleted successfully`,
  });
};

module.exports = {
  todoGetAll,
  todoPost,
  todoDelete,
};

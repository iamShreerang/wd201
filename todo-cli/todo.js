// todo.js
const todo_List = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const mark_As_Complete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const due_Today = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };

  const due_Later = () => {
    return all.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };
  return { all, add, mark_As_Complete, overdue, due_Today, due_Later };
};

module.exports = todo_List;

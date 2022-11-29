import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, message, Popconfirm } from "antd";

import { deleteTaskAction } from "../../redux/actions";

import * as S from "./style";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);

  const searchTaskList = tasks.taskList.filter((task) => {
    if (keyword === "") return task;

    return task.title.toLowerCase().includes(keyword.toLowerCase().trim());
  });

  const handleDeleteTask = (id) => {
    dispatch(deleteTaskAction({ id }));
  };

  const renderTaskList = () => {
    return searchTaskList.map((task) => {
      return (
        <div
          key={task.id}
          style={{
            width: "800px",
            padding: 20,
            margin: "8px auto",
            borderRadius: "2px",
            boxShadow: "0 0 5px #ccc",
          }}
        >
          <h2>Title: {task.title}</h2>
          <p>Content: {task.content}</p>
          <S.TaskActions>
            <Button
              onClick={() =>
                navigate(`/tasks/${task.id}/update`, {
                  state: {
                    task: task,
                  },
                })
              }
            >
              UPDATE
            </Button>
            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={() => handleDeleteTask(task.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="danger">DELETE</Button>
            </Popconfirm>
          </S.TaskActions>
        </div>
      );
    });
  };

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderTitle>TASK LIST</S.HeaderTitle>
        <Link to="/tasks/create">CREATE NEW TASK</Link>
      </S.HeaderContainer>
      <S.SearchBarContainer>
        <Input
          placeholder="Search task..."
          allowClear
          size="large"
          onChange={(e) => setKeyword(e.target.value)}
        />
      </S.SearchBarContainer>
      <div>{renderTaskList()}</div>
    </>
  );
};

export default HomePage;

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { updateTaskAction } from "../../redux/actions";

import * as S from "./style";

const UpdateTaskPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tasks = useSelector((state) => state.task);
  const { id } = useParams();
  const task = tasks.taskList.find((task) => task.id === id);

  const handleUpdateTask = (values) => {
    dispatch(updateTaskAction({ values, id: task.id }));
    navigate("/tasks");
  };

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderTitle>UPDATE TASK</S.HeaderTitle>
        <Link to="/tasks">BACK</Link>
      </S.HeaderContainer>
      <S.UpdateTaskForm>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          autoComplete="off"
          initialValues={task}
          onFinish={(values) => handleUpdateTask(values)}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input task title!",
              },
              {
                min: 3,
                message: "Please input task title >3 character",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Content"
            name="content"
            rules={[
              {
                required: true,
                message: "Please input task content!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" block>
              UPDATE
            </Button>
          </Form.Item>
        </Form>
      </S.UpdateTaskForm>
    </>
  );
};

export default UpdateTaskPage;

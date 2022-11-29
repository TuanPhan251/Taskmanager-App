import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { createTaskAction } from "../../redux/actions";

import * as S from "./style";

const CreateTaskPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateTask = (values) => {
    dispatch(createTaskAction({ values }));
    navigate("/tasks");
  };

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderTitle>CREATE TASK</S.HeaderTitle>
        <Link to="/tasks">BACK</Link>
      </S.HeaderContainer>
      <S.CreateTaskForm>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          autoComplete="off"
          onFinish={(values) => handleCreateTask(values)}
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
              CREATE
            </Button>
          </Form.Item>
        </Form>
      </S.CreateTaskForm>
    </>
  );
};

export default CreateTaskPage;

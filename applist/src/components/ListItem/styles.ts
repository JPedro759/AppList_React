import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
  display: flex;
  justify-content: space-between;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  .checkbox {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  label {
    color: #ccc;
    text-decoration: ${done ? "line-through" : "initial"};
  }

  .delete {
    background-color: #A52a2a;
    padding: 7px 10px;
    border: none;
    border-radius: 5px;
    color: #ccc;
    font-size: 14px;
    font-weight: bold;
  }
`
);

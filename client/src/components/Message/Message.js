import { message } from "antd";

export const success = (mes) => {
  message.success({
    content: mes,
    style: {
      position: "fixed",
      top: "20px",
      right: "20px",
    },
  });
};

export const error = (mes) => {
  message.error({
    content: mes,
    style: {
      position: "fixed",
      top: "20px",
      right: "20px",
    },
  });
};

export const warning = (mes) => {
  message.warning({
    content: mes,
    style: {
      position: "fixed",
      top: "20px",
      right: "20px",
    },
  });
};

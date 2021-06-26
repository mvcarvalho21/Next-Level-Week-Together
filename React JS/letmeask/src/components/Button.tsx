import { ButtonHTMLAttributes } from "react"; //repassa para a função Button todas as propriedades de um button HTML

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  //recebe props do ButtonHTMLAttributes e mais uma prop isOutlined como boolean
  isOutlined?: boolean;
};
export function Button({ isOutlined = false, ...props }: ButtonProps) {
  //repassa todas as propriedades recebidas para o "button" do return. Tudo que não for isOutlined ele pega os props (resto)
  return (
    <button className={`button ${isOutlined ? "outlined" : ""}`} {...props} /> //...props distribui todas as propriedades passadas como parâmetro para o button
  );
}

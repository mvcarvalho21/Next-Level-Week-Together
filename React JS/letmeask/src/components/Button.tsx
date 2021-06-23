import { ButtonHTMLAttributes } from "react"; //repassa para a função Button todas as propriedades de um button HTML

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; //padrão para props do ButtonHTMLAttributes

export function Button(props: ButtonProps) {
  //repassa todas as propriedades recebidas para o "button" do return
  return (
    <button className="button" {...props} /> //...props distribui todas as propriedades passadas como parâmetro para o button
  );
}

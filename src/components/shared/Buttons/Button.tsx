
import styled from "styled-components";

interface IButtonProps {
  disabled?: boolean;
  height?: number;
  width?: number;
  loading?: boolean;
  title?: string;
  loader?: JSX.Element;
  handleClick?: () => void;
}

const Buttonn = styled.button<IButtonProps>`
  width: 100%;
  max-width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 7px;
  gap: 2px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.disabled ? "#ddd" : "blue")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;

const Button = ({
  title,
  loader,
  loading,
  height,
  width,
  disabled,
  handleClick,
}: IButtonProps) => {
  return (
    <>
      <Buttonn
        disabled={disabled}
        width={width}
        height={height}
        onClick={handleClick}
      >
        <span>{title ? title : "Button"}</span> {loading ? loader : null}
      </Buttonn>
    </>
  );
};

export default Button;

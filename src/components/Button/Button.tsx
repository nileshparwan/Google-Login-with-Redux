import React from 'react';

interface ButtonProps {
  className?: string;
  iconClassName?: string;
  ButtonText?: string;
  url?: string;
  callBackFunction: Function;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  iconClassName,
  ButtonText,
  url,
  callBackFunction,
}) => {
  return url === (null || undefined) ? (
    <button
      type="button"
      className={[`ui button`, className !== undefined && ` ${className}`].join(
        ' '
      )}
      onClick={(e) =>
        callBackFunction !== null ? callBackFunction(e) : e.preventDefault()
      }
    >
      {iconClassName !== undefined && (
        <i
          className={[
            'icon',
            iconClassName !== undefined && `${iconClassName}`,
          ].join(' ')}
        />
      )}
      {ButtonText !== undefined && ButtonText}
    </button>
  ) : (
    <a
      href={url}
      role="button"
      className={[`ui button`, className !== undefined && ` ${className}`].join(
        ' '
      )}
    >
      {iconClassName !== undefined && (
        <i
          className={[
            'icon',
            iconClassName !== undefined && `${iconClassName}`,
          ].join(' ')}
        />
      )}
      {ButtonText !== undefined && ButtonText}
    </a>
  );
};

export default Button;

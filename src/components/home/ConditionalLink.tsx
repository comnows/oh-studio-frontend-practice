import { Link } from "react-router-dom";
import { Children } from "../../lib/types";

type ConditionalLinkProps = Children & {
  isLock: boolean;
  path: string;
  className: string;
};

function ConditionalLink({
  children,
  isLock,
  path,
  className,
}: ConditionalLinkProps) {
  return isLock ? (
    <a className={className}>{children}</a>
  ) : (
    <Link to={path} className={className}>
      {children}
    </Link>
  );
}

export default ConditionalLink;

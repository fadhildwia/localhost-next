import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

const RetainQueryLink = ({ href, ...props }: LinkProps & PropsWithChildren) => {
  const router = useRouter();
  const pathname = typeof href === 'object' ? href.pathname : href;
  const query = typeof href === 'object' && typeof href.query === 'object' ? href.query : {};

  return (
    <Link
      {...props}
      href={{
        pathname: pathname,
        query: {
          ...router.query,
          ...query
        }
      }}
    />
  );
};
export default RetainQueryLink;
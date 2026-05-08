import type { PropsWithChildren } from 'react';

export function DefaultLayout({ children }: PropsWithChildren) {
  return <main>{children}</main>;
}

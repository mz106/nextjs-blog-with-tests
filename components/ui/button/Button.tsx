import React from 'react'
import Link from 'next/link';

import type { ButtonProps } from '../../../lib/ui/types';

type Props = {}

const Button = ({ link, handler, children } : ButtonProps) => {

  if(link) {
      return (
        <Link href={link.url}>
            <a>{children}</a>
        </Link>
      );
  }  

  return (
    <button onClick={handler}>
        {children}
    </button>
  )
}

export default Button
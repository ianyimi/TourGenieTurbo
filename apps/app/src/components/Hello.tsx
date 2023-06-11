import React from 'react';
import { trpcReact } from 'src/utils/trpc';

export default function Hello() {
  const { data, isError, isSuccess } = trpcReact.greeting.useQuery();
  console.log('data', data, 'isError', isError, 'isSuccess', isSuccess);
  return <div className="text-red-500">Trpc says: {data}</div>;
}

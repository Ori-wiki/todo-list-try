import { useMemo } from 'react';
import { ListPosition } from './types';
import { getUUID } from './utils/getUUID';

interface ListConnectionProps {
  listPosition: ListPosition[];
  deep: number;
  children: React.ReactNode;
}

const ListConnection = ({
  listPosition,
  deep,
  children,
}: ListConnectionProps) => {
  const data = useMemo(
    () => listPosition.map((position) => ({ position, id: getUUID() })),
    [listPosition, deep]
  );

  return (
    <div className='min-h-8 flex pr-8'>
      {data.map((el) => (
        <div key={el.id} className='w-8 h-full relative'>
          {el.position === ListPosition.BOUND && (
            <>
              <div className='absolute left-1/2 -top-1/2 w-0.5 h-[200%] bg-[#666]' />
            </>
          )}

          {el.position === ListPosition.START && (
            <>
              <div className='absolute left-1/2 -top-1/2 w-0.5 h-[200%] bg-[#666]' />
              <div className='absolute left-1/2 -top-1/2 w-full h-0.5 bg-[#666]' />
            </>
          )}

          {el.position === ListPosition.CENTER && (
            <>
              <div className='absolute left-1/2 -top-1/2 w-0.5 h-[200%] bg-[#666]' />
              <div className='absolute left-1/2 -top-1/2 w-full h-0.5 bg-[#666]' />
            </>
          )}

          {el.position === ListPosition.END && (
            <>
              <div className='absolute left-1/2 -top-1/2 w-full h-0.5 bg-[#666]' />
              <div className='absolute left-1/2 -top-1/2 w-0.5 h-full bg-[#666]' />
            </>
          )}
        </div>
      ))}
      <div
        className='relative z-10 pl-8 w-8 h-full flex justify-center items-center'
        onDoubleClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
export default ListConnection;

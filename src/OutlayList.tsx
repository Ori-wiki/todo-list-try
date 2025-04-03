import { ListItemIcon } from './assets/icon';
import OutlayListItem from './OutlayListItem';

export const OutlayList = () => {
  return (
    <div className='overflow-y-auto flex-grow flex flex-col'>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='text-[#A1A1AA] text-left'>
            <th className=''>
              <span className='flex gap-3 relative items-center'>
                <button
                  className='w-8 h-8 relative z-10 flex'
                  title='Создать корневой элемент'
                >
                  <ListItemIcon />
                </button>
                <span className=''>Уровень</span>
              </span>
            </th>
            <th className='min-w-[400px]'>Наименование</th>
            <th className='min-w-[200px]'>Кол-во</th>
            <th className='min-w-[200px]'>Сумма</th>
          </tr>
        </thead>

        <tbody>
          <OutlayListItem />
          <OutlayListItem />
          <OutlayListItem />
          <OutlayListItem />
          <OutlayListItem />
        </tbody>
      </table>
    </div>
  );
};

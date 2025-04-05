import { ListItemIcon } from './assets/icon';
import OutlayListItem from './OutlayListItem';
import { TreeNodeList } from './types';

interface OutlayListProps {
  treeNodeList: TreeNodeList[];
}

export const OutlayList = ({ treeNodeList }: OutlayListProps) => {
  return (
    <div className='p-4 overflow-y-auto flex-grow flex flex-col'>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='text-[#A1A1AA] text-left'>
            <th className='p-2'>
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
            <th className='p-2 min-w-[400px]'>Наименование</th>
            <th className='p-2 min-w-[200px]'>Кол-во</th>
            <th className='p-2 min-w-[200px]'>Сумма</th>
          </tr>
        </thead>

        <tbody>
          {treeNodeList.map((item) => {
            console.log(item);
            return <OutlayListItem item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

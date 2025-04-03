import { ListItemIcon, TrashItemIcon } from './assets/icon';

const OutlayListItem = () => {
  return (
    <tr className=''>
      <td className='min-h-16 flex gap-3 relative items-center'>
        <button
          className='w-8 h-8 relative z-10 flex'
          title='Создать корневой элемент'
        >
          <ListItemIcon />
        </button>
        <button
          className='w-8 h-8 relative z-10 flex'
          title='Создать корневой элемент'
        >
          <TrashItemIcon />
        </button>
      </td>
      <td className='min-w-[400px]'>Элемент 1</td>
      <td className='min-w-[200px]'>333</td>
      <td className='min-w-[200px]'>999</td>
    </tr>
  );
};
export default OutlayListItem;

import { ListItemIcon, TrashItemIcon } from './assets/icon';
import { TreeNodeList } from './types';

interface TreeNode {
  item: TreeNodeList;
}

const OutlayListItem = ({ item }: TreeNode) => {
  return (
    <tr className=''>
      <td className='p-2 min-h-16 flex gap-3 relative items-center'>
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
      <td className='p-2 min-w-[400px]'>{item.body.name}</td>
      <td className='p-2 min-w-[200px]'>{item.body.count}</td>
      <td className='p-2 min-w-[200px]'>{item.body.sum}</td>
    </tr>
  );
};
export default OutlayListItem;

import { OutlayList } from './OutlayList';

const treeList = [
  {
    body: {
      id: '3e3e3e',
      count: 10,
      sum: 1000,
      name: 'zxc',
    },
    parentId: null,
  },
];

export const TreeList = () => {
  return (
    <>
      <div className='p-5 text-[#666]'>
        *** Для редактирования элемента дважды кликнете по нужной строке. По
        нажатию Escape можно выйти из режима редактирования или создания нового
        элемента. Для создания элемента или его удаления (вместе с дочерними),
        нажмите иконки в соответствущей строке
      </div>
      <div className=''>
        <OutlayList treeNodeList={treeList} />
      </div>
    </>
  );
};

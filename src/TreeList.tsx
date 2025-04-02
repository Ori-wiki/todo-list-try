import { OutlayList } from './OutlayList';

export const TreeList = () => {
  return (
    <>
      <div className='p-5 text-indigo-50'>
        *** Для редактирования элемента дважды кликнете по нужной строке. По
        нажатию Escape можно выйти из режима редактирования или создания нового
        элемента. Для создания элемента или его удаления (вместе с дочерними),
        нажмите иконки в соответствущей строке
      </div>
      <div className=''>
        <OutlayList />
      </div>
    </>
  );
};

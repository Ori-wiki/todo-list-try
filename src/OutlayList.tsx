import { ListItemIcon } from './assets/icon';

export const OutlayList = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <span className='flex gap-3 relative items-center'>
          <button
            className='w-8 h-8 relative z-10 flex'
            title='Создать корневой элемент'
          >
            <ListItemIcon />
          </button>
          <span className=''>Уровень</span>
        </span>
        <span className='block min-w-[400px]'>Наименование</span>
        <span className='block min-w-[200px]'>Кол-во</span>
        <span className='block min-w-[200px]'>Сумма</span>
      </div>
      <ul>
        <li className=''>первое дело</li>
        <li className=''>второе дело</li>
        <li className=''>третье дело</li>
        <li className=''>четвёртое дело</li>
        <li className=''>пятое дело</li>
        <li className=''>шестое дело</li>
      </ul>
    </div>
  );
};

import './App.scss';
import FormCreated from './components/FormCreated';

function App() {
  return (
    <div className="App">
      <FormCreated
        color={'red'}
        realFormName={'Введите свой заголовок'}
        switches={[
          { label: 'Имя', checked: true, name: 'name' },
          { label: 'Телефон', checked: true, name: 'tel' },
          { label: 'Город', checked: true, name: 'city' },
          { label: 'Предмет', checked: true, name: 'subject' },
          { label: 'Размер шрифта', checked: true, name: 'font' },
          {
            label: 'Добавить комментарий и файл',
            checked: true,
            name: 'commFile',
          },
        ]}
        subjectName={{
          value: 'Введите название предмета',
          label: 'Введите название предмета',
        }}
        cityName={'Введите название города'}
        buttonName={'Узнать стоимость'}
        workType={{ value: undefined, label: 'Не выбрана' }}
      />
    </div>
  );
}

export default App;

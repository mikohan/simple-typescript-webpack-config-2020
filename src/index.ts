import './styles/index.scss';
import { MyClass } from '~/newDelete';

console.log('Typescript Simple Webpack Config');

const my = new MyClass();

my.setName('Vlad');
my.setYear(1971);

console.log(my.getAll);

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


## **Lesson-1.2 Компоненты:**

Рассмотрели что такое компоненты в React, как их создавать, импортировать.

Компонент - функция JS, которую можно дополнить разметкой.

Как создать компонент:

**1. Экспорт компонента**
Префикс export/export default - стандратный синтаксис JS, который позволяет "отметить" функцию в файле и далее импортировать в другой файлю.
**2. Запись функции**
function Foobar() {}
Название ф-ций в React записывается с большой буквы, иначе они не будут работать.
**3. Добавление разметки**
Пример:

`export default function Foobar() {
return (
<div>Hello World</div>)}`

- Если оператор return стоит в одной строке с разметкой, то () можно не ставить.
- Если в разметке содержится несколько тегов, то их необходимо заключить в родительский тег, например, <div> или в пустую обертку <></> (фрагмент)
- Все теги должны быть закрытыми, если это одиночный тег. например, <br>, то его необходимо закрыть <br />.
- Все атрибуты HTML и SVG необходимо записывать в camelCase (className)
- Созданный компонент можно использовать в других компонентах.
- Компоненты можно хранить по несколько шт. в 1 файле, если они небольшие или тесно связаны друг с другом.
- Компоненты могут отображать другие компоненты, но их функции не должны быть вложеными друг в друга.

**Разница между именным экспортом и экспортом по умолчанию.**
- Экспорт по умолчанию (export default) может использоваться только 1 раз в файле.
  Заявление об экспорте: export default function Foo() {...};
  Заявление об импорте: import Foo from './Foo.tsx'

- Именной экспорт может использоваться несколько раз в файле.
  Заявление об экспорте: export function Foo(){...}
  Заявление об импорте: import {Foo} from './Foo.tsx'


**Динамическая передача элементов**
Для динамической передачи элементов используются {};
{} можно использовать:
- в тексте, например <p>{name}'s To Do List</p>
- В атрибутах: src={avatar}

Чтобы передать объект JS в JSX, необходимо заключить его в еще одну пару фигурных скобок: person={{ name: "Hedy Lamarr", inventions: 5 }}.
Также двойные фигурные скобки используют, если необходимо прописать ин-лайн стили:

` <ul style={{

      backgroundColor: 'black',

      color: 'pink'

    }}>`

(Встроенные style свойства пишутся в стиле camelCase.)
**Props**
Props выполняют функцию атрибутов в функциях.
пример:

`import {type FC} from 'react';

type MyComponentPropsType = {text: string}`

`const MyComponent: FC <MyComponentPropsType> = ({text}) => {
return (
<div className={styles.container}>
{text}
</div>
);
};`

Далее при вызове дочернего компонента в родительском, прописывается значения Props.
`function App() {
return (
<>
<MyComponent text={'Hello'} />
<MyComponent text={'Goodbye'} />
//
          {/*{MyComponent({text: 'Goodbye'})}*/}
      </>
)
}`


#### Lesson-1.4 - Базовые и модульные стили

#### Основные способы стилизации в React:

**Глобальный CSS (Базовые стили):**
* Создается файл, например, index.css.
* Импортируется в index.js или App.js: import './index.css';.
* Стили применяются ко всему проекту. Идеально для сброса стилей (reset.css) и переменных.

#### CSS Modules (Модульные стили):

* Файл должен называться ComponentName.module.css.
* Импортируется как объект: import styles from './Button.module.css';.
* Использование: `<button className={styles.errorButton}>.`
* Классы изолированы внутри компонента.

-------------------

Lesson 1 - Children

Основное назначение свойства children — получать и обрабатывать содержимое, передаваемое внутри открывающего и закрывающего тегов выражения JSX. При написании выражения JSX с открывающим и закрывающим тегами содержимое, передаваемое между ними, называется их дочерним элементом:

`<MyComponent title={'title 2'}>
            Hello World
        </MyComponent>`

Это позволяет создавать переиспользуемые компоненты-обертки (например, панели, модальные окна), передавая в них произвольный JSX-код.

Использование: Принимается в компоненте так же, как и любые другие пропсы: `const Component = ({ children }) => <div>{children}</div>;.`
Типы данных: children может быть строкой, числом, JSX-элементом, массивом или функцией.
Применение: Идеально подходит для верстки сложного контента, где внутренняя часть меняется, а оболочка остается прежней. 

для типизации элементов children используется ReactNode.
`import type {ReactNode} from "react"
type MyComponentPropType = {
    title: string,
    children: ReactNode
}`

**ReactNode** - надмножественный тип, включающий все значения, которые может отображать React.
**Этот тип включает в себя:**

* Элементы JSX
* Простой текст и цифры
* Массивы элементов JSX
* Условные рендеры
* null, undefined и false
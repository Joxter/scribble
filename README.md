# Scribble

A real-time collaborative drawing application built with React and InstantDB. Create drawings together with others in real-time with smooth brush strokes and intuitive controls.

## TODO
- [x] установил и настроил линарию!
- [x] Внутри комнаты есть кнопка "Начать", но она ПОКА НЕ РАБОТАЕТ
- [x] Создание комнат в статусе подготовки
- [x] В списке всех комнат видно название комнаты и её статус
- [x] Внутри комнаты можно менять своё имя
- [x] Подключение других игроков по имени комнаты
- [x] Есть кнопка покинуть комнату
- [x] При подключении к комнате предлагают выбрать своё имя
- [x] Хост
  - [x] по умолчанию создатель
  - [x] может кикать других игроков
- [x] параметры новой игры
  - [x] количество раундов
  - [x] количество слов на выбор
  - [x] время на рисунок
- [x] хост может начать игру (пока без таймера и перехода ходов, начинаем пользоваться gameState)
  - [x] фиксируется список игроков в массив
  - [x] переключается страница в рисование
- [x] реанимировать состояние игры
  - [x] корректное стартовое состояние игры 
    - [x] генерируются слова
    - [x] кто-то назначен рисовальщиком
    - [x] игроки видят чат/хост/инстрмуенты согласно своим ролям
    - [x] выбор слова режим рисования (пока без таймера)
  - [x] рисование линий!
    - [x] топик или что-то еще, нужно определиться и сделать
    - [x] полностью работает!
- [x] сообщения в чат
  - [x] просто сообщения в чат
  - [x] отгадывания
    - [x] "X почти отгадал"
    - [x] "x отгадал!"
- [x] создавать рисунок при выборе слова (слово, автор, количество отгадываний merge, статус in-progress/done)
  - [x] записывать ссылку на рисунок в игровое состояние currentDraw
  - [x] тот кто рисует, транслирует рисунок через топик, но каждую нарисованную линию записывает в рисунок через транзакцию
  - [x] игроки при открытии страницы единоразово качают рисунок из базы
  - [x] отгадки записываются в ~~рисунок~~ состояние игры игроками самостоятельно
  - [x] и если есть все отгадки, то завершает ход и отправляет сообщение в чат
- [x] если все отгадали, то рисование завершается
  - [x] сообщение "раунд закончен!"
  - [x] рисунок сохраняется
  - [x] видно кто следующий рисует
  - [x] тот кто рисует - выбирает слова
- [x] обновить схему и типы
  - [x] более адекватное состояние игры
  - [x] норм фиксированный список игроков
  - [x] обновить код и починить все ошибки типов
  - [x] gameProgress
- [x] мелкий рефакторинг
  - [x] сторы для всех рисунков
- [x] системные сообщения
  - [x] пользователь видит поле ввода, может отправлять сообщение и видит сообщение в списке
  - [x] "слово выбрано!"
  - [x] при создании игры
  - [x] "выбирает слово"
- [x] таймер
  - [x] рисовальщик устанавливает таймер
  - [x] рисовальщик по истечению времени закрывает рисунок до того как все отгадали
- [ ] clue
  - [x] показывать подсказку
  - [ ] улучшать подсказку (до 30% перую половину времени, потом еще 30% на четверь ремени)
- [ ] перепроверить список игроков
  - [x] перейти на правильный локальный id
  - [x] игроки видят список игр в которых участвовали
  - [x] ~~в игру записываются все игроки со статусами (играет, кикнут, вышел)~~
  - [ ] добавить кнопку выхода из игры/кика, тогда софтделит из снапшота игроков
  - [x] ~~как-то связать локальный ID со снапшотом~~
- [ ] окно выбора нового слова
  - [x] видно результаты
  - [ ] можно проголосовать за рисунок
- [ ] игровой процесс
  - [x] следить за количеством сыгранных раундов
  - [ ] алгоритм подсчета очков
  - [ ] показывать количество очков в списке игроков
- [ ] UI
  - [ ] "игра не найдена", не обязательные "-" и прочее
  - [ ] список игроков
    - [ ] показывать очки
    - [ ] показывать текущего игрока и следующего крупно, остальных где-то кратко
  - [ ] поле ввода отгадок с _ и открытыми буквами
  - [ ] починить чат на мобилках
- [ ] финал!
  - [x] покатывать результаты: очки, имена, выделять текущего игрока
  - [ ] видно все рисунки
  - [ ] можно создать ещё одну игру
- [ ] "сервер"
  - [x] считает сколько игроков отгадали и меняет состояние игры
  - [ ] следит со таймерами
- [ ] бекенд
  - [ ] файлик с сервером
    - [ ] ~~который подписывается на топики (canvas) игр~~
    - [ ] ~~возвращает канвас~~
    - [ ] который подписывается на новые сообщения in progress игр


Backlog:
- [ ] кикнутый игрок должен редиректиться на главную
- [ ] если хост вышел из комнаты, то им назначается кто-то другой (с минимальным id?)
- [ ] цензурить отгаданное словое, если его написали снова

 ## Features

- **Real-time Collaboration**: Multiple users can draw simultaneously with instant synchronization
- **Smooth Drawing**: Powered by `perfect-freehand` for natural, pressure-sensitive strokes
- **Touch Support**: Works on both desktop and mobile devices
- **Drawing Tools**:
  - Color picker
  - Adjustable brush sizes
  - Undo functionality
- **Responsive Design**: Optimized for various screen sizes

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **State Management**: Effector
- **Real-time Database**: InstantDB
- **Drawing Engine**: perfect-freehand, lazy-brush
- **Routing**: Wouter
- **Build Tool**: Vite
- **Styling**: CSS

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd scribble
```

2. Install dependencies:

```bash
npm install
```

3. Configure InstantDB:
   - The app uses InstantDB for real-time synchronization
   - Current configuration uses a demo ID in `src/config.ts`
   - For production, you'll need to set up your own InstantDB instance

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run check-types` - Run TypeScript type checking
- `npm run deploy` - Build and deploy to GitHub Pages
- `npx instant-cli@latest push` - Push new schema for Instand DB

## Key Components

### Canvas (src/drawing/Canvas.tsx)

The main drawing component that handles:

- Mouse and touch events for drawing
- Coordinate transformation for responsive design
- Real-time stroke rendering
- Integration with the drawing state

### Database (src/DB.ts & instant.schema.ts)

InstantDB integration for:

- Real-time data synchronization
- Canvas state persistence
- Multi-user collaboration

## Configuration

The app includes configuration options in `src/config.ts`:

- Canvas size settings
- Brush smoothing parameters
- Demo/party ID for database operations

## Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## Development Notes

- The app uses a demo configuration with a hardcoded party ID
- The drawing engine uses SVG paths for smooth, scalable strokes
- Touch events are handled for mobile compatibility

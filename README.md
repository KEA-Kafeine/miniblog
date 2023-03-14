# miniblog 과제 / json-server 이용

터미널 => 해당 디렉토리 이동 => npm install => npm start

그대로 놔두고 다른 새 터미널 => json-server --watch ./src/data.json --port 3001
(기본 포트 3000으로 실행되는데, 리액트 app과 겹치므로 3001로 변경)

실행 이후
http://localhost:3001/posts
위 링크로 접속해서 임시로 서버 역할을 하고 있는 json 파일 확인 가능

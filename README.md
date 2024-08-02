# Happy Scribbles


> 일상의 작은 행복들을 기록하는 일기장, **Happy Scribbles**✏

기록하기 쉽고 직관적인 인터페이스를 통해 매일의 기쁨과 중요한 순간들을 손쉽게 기록하고 관리할 수 있습니다.

<br>

---
## 페이지 별 주요 기능
#### 1. Calendar 페이지 (기본 페이지)

![1](https://github.com/user-attachments/assets/4b8166d8-a93d-4b46-a3ec-0bfa56cad5a6)

- 날짜 이동

  
  : 왼쪽 상단의 날짜 스크롤바를 이용하여 원하는 년도의 달로 이동할 수 있습니다.

  : 날짜 양 옆의 화살표를 눌러 이전 달, 다음 달로 이동할 수 있습니다.

  : TODAY 버튼을 누르면 오늘 날짜에 해당하는 년도의 달로 이동할 수 있습니다.

<br>

- 페이지 이동


  : Check List 버튼을 누르면 Check List 페이지로 이동할 수 있습니다.
  
  : Diary List 버튼을 누르면 Diary List 페이지로 이동할 수 있습니다.
  
  : New 버튼을 누르면 새로운 일기 작성 페이지로 이동할 수 있습니다.

<br>

- 달력의 일기 클릭

  
  : 작성한 일기는 달력에 제목이 표시되고 제목을 클릭하면 해당 일기의 상세보기 페이지로 이동할 수 있습니다.

<br>

#### 2. Check List 페이지
![스크린샷 2024-08-02 170549](https://github.com/user-attachments/assets/dc42085d-5fc0-4ed9-9473-6b4b9a5c108a)

- Check List

  
  : 추가할 Check List를 입력하고 enter를 누르거나 추가버튼을 클릭하면 Check List를 추가할 수 있습니다.

  : 추가된 Check List는 검색창 아래에 추가한 순서대로 날짜, 삭제버튼과 함께 보여집니다.

  : 삭제 버튼을 누르면 해당 Check List를 삭제할 수 있습니다.

  : 체크 박스를 선택하면 완료 표시가 나타납니다.

<br>

![스크린샷 2024-08-02 170558](https://github.com/user-attachments/assets/e65110d9-c434-4a84-846b-c04e8b633580)

- Check List 검색
  

  : 검색창에 Check List를 검색하면 리스트에 해당 Check List만 나타납니다.
  
  : 대소문자 구별없이 검색 가능합니다.

<br>

#### 3. Diary List 페이지
![스크린샷 2024-08-02 170610](https://github.com/user-attachments/assets/37b29c4c-97e2-4292-8a9a-d3c66dcd6ee8)

- Diary List

  
  : Calendar 페이지와 마찬가지로 날짜 이동을 할 수 있습니다.

  : 월별로 작성한 일기가 리스트 형식으로 보여집니다.

  : Oldest, Latest 선택을 통해 최신순, 오래된 순으로 리스트가 정렬됩니다.

  : 일기를 클릭하면 해당 일기의 상세페이지로 이동합니다.

<br>

#### 4. 일기 작성 페이지
![22](https://github.com/user-attachments/assets/9c803e4f-573d-44b3-9887-80d081a57427)

![스크린샷 2024-08-02 165729](https://github.com/user-attachments/assets/dae4efb3-26c2-423b-98da-1b09b40ff1e2)

- 일기 작성

  
  : 날짜, 날씨, 제목, 플레이리스트, 일기를 작성할 수 있습니다.

  : Cancel 버튼을 클릭하면 일기 작성이 취소되고 이전 페이지로 이동합니다.

  : Complete 버튼을 클릭하면 일기 작성이 완료되고 Calendar 페이지로 이동합니다.

<br>

#### 5. 일기 상세 페이지
![스크린샷 2024-08-02 165957](https://github.com/user-attachments/assets/1a4fa111-3162-4945-a6fe-fd918c3051b0)

- 일기 상세 보기

  
  : 날짜, 날씨, 제목, 플레이리스트, 일기를 확인할 수 있습니다.

  : Edit 버튼을 클릭하면 일기 수정 페이지로 이동합니다.

<br>

#### 6. 일기 수정 페이지
![스크린샷 2024-08-02 170009](https://github.com/user-attachments/assets/ca4125bf-ae36-4fae-b627-ea26096b6c0e)
![스크린샷 2024-08-02 170013](https://github.com/user-attachments/assets/985efff5-29ba-45bf-b2fb-a9b403e8616e)

- 일기 수정
  
  : 날짜, 날씨, 제목, 플레이리스트, 일기를 수정할 수 있습니다.

  : Cancel 버튼을 클릭하면 일기 수정이 취소되고 이전 페이지로 이동합니다.

  : Complete 버튼을 클릭하면 일기 수정이 완료되고 Calendar 페이지로 이동합니다.

<br>

## 라이브러리

```
"dependencies": {
        "@fortawesome/fontawesome-svg-core": "^6.5.1",
        "@fortawesome/free-brands-svg-icons": "^6.5.1",
        "@fortawesome/free-regular-svg-icons": "^6.5.1",
        "@fortawesome/free-solid-svg-icons": "^6.5.1",
        "@fortawesome/react-fontawesome": "^0.2.0",
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "date-fns": "^3.3.1",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-helmet": "^6.1.0",
        "react-router-dom": "^6.21.1",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
      }
```


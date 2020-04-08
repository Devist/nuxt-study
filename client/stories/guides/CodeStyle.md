
## Code Style

### 1. Component Template

컴포넌트의 **<template~**부분은 html을 작성하고 일부 자바스크립트와 결합됩니다. 이 부분은 개발 단계 또는 빌드 단계에서 타입(형식) 체크하는 부분이 아니기 때문에, 오타 등이 있을 경우 runtime에서만 볼 수 있습니다.

따라서 **최소한의 자바스크립트만 사용** 합니다.

~~~php+HTML
/** Bad case */
/** 변수가 비어 있거나 속성이 비어있을 수 있기 때문에 computed를 사용하는 것이 좋음 */
<data-label
        :value="
            currentActivityOffer.owner.name +
            ' ' +
            currentActivityOffer.owner.surname
        "
        class="flex-1 justify-content-center"
        label="Owner"
/>
         

/** Good case*/
<data-label
        :value="currentActivityOfferOwnerNameSurname"
        class="flex-1 justify-content-center"
        label="Owner"
/>

~~~

